const Trainer = require('../models/Trainer');

const getTrainers = async (req, res) => {
    const trainers = await Trainer.find({});
    res.json(trainers);
};

const createTrainer = async (req, res) => {
    const { name, specialization, experience, bio, image } = req.body;
    const trainer = new Trainer({ name, specialization, experience, bio, image });
    const createdTrainer = await trainer.save();
    res.status(201).json(createdTrainer);
};

const deleteTrainer = async (req, res) => {
    const trainer = await Trainer.findById(req.params.id);
    if (trainer) {
        await trainer.deleteOne();
        res.json({ message: 'Trainer removed' });
    } else {
        res.status(404).json({ message: 'Trainer not found' });
    }
};

module.exports = { getTrainers, createTrainer, deleteTrainer };
