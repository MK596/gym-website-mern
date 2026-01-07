const Membership = require('../models/Membership');

const getMemberships = async (req, res) => {
    const memberships = await Membership.find({});
    res.json(memberships);
};

const createMembership = async (req, res) => {
    const { name, price, features } = req.body;
    const membership = new Membership({ name, price, features });
    const createdMembership = await membership.save();
    res.status(201).json(createdMembership);
};

const deleteMembership = async (req, res) => {
    const membership = await Membership.findById(req.params.id);
    if (membership) {
        await membership.deleteOne();
        res.json({ message: 'Membership removed' });
    } else {
        res.status(404).json({ message: 'Membership not found' });
    }
};

module.exports = { getMemberships, createMembership, deleteMembership };
