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

// Primary Routes (Public Access)
app.use('/api/trainers', require('./routes/trainerRoutes'));
app.use('/api/programs', require('./routes/programRoutes'));
app.use('/api/memberships', require('./routes/membershipRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Deployment configuration
const dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(dirname, '/frontend/dist')));

    app.get('(.*)', (req, res) =>
        res.sendFile(path.resolve(dirname, 'frontend', 'dist', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
