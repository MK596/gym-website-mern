const ContactMessage = require('../models/ContactMessage');

const createContactMessage = async (req, res) => {
    const { name, email, message } = req.body;
    const contact = new ContactMessage({ name, email, message });
    const createdContact = await contact.save();
    res.status(201).json(createdContact);
};

module.exports = { createContactMessage };
