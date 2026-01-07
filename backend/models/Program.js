const mongoose = require('mongoose');

const programSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String },
    image: { type: String },
    intensity: { type: String, default: 'Medium' },
    schedule: { type: String, default: 'Mon-Wed-Fri 10:00 AM' },
    benefits: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Program', programSchema);
