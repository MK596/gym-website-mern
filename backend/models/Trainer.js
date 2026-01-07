const mongoose = require('mongoose');

const trainerSchema = mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, required: true },
    certifications: [{ type: String }],
    rating: { type: Number, default: 5.0 },
    socials: {
        instagram: { type: String },
        twitter: { type: String },
        linkedin: { type: String }
    }
}, { timestamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);
