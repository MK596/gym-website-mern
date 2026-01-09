const Membership = require('../models/Membership');

const getMemberships = async (req, res) => {
    const memberships = await Membership.find({});
    res.json(memberships);
};

module.exports = { getMemberships };
