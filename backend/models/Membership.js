const mongoose = require('mongoose');

const membershipSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    features: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema);
