const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// 1. Health Check Route (Verify if backend is alive)
app.get('/api/health', (req, res) => {
    res.json({ status: 'Backend is running perfectly!', business: process.env.BUSINESS_NAME });
});

// 2. Main API Routes
app.use('/api/trainers', require('./routes/trainerRoutes'));
app.use('/api/programs', require('./routes/programRoutes'));
app.use('/api/memberships', require('./routes/membershipRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// 3. Static Files & Production SPA Routing
const dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    // Serve static files from the Solid path
    app.use(express.static(path.join(dirname, 'frontend', 'dist')));

    // Catch-all route to serve index.html for React Router
    app.get(/.*/, (req, res) => {
        // Exclude /api routes from being caught by the frontend router
        if (req.originalUrl.startsWith('/api')) {
            return res.status(404).json({ message: 'API Route Not Found' });
        }
        res.sendFile(path.resolve(dirname, 'frontend', 'dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running in development mode...');
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
