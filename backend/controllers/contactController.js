const ContactMessage = require('../models/ContactMessage');

const createContactMessage = async (req, res) => {
    const { name, email, phone, message } = req.body;
    const contact = new ContactMessage({ name, email, phone, message });
    const createdContact = await contact.save();
    res.status(201).json(createdContact);
};

module.exports = { createContactMessage };
