const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    message: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    adminResponse: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('ContactMessage', contactSchema);
