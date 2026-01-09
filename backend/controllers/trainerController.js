const Trainer = require('../models/Trainer');

const getTrainers = async (req, res) => {
    const trainers = await Trainer.find({});
    res.json(trainers);
};

const getTrainerById = async (req, res) => {
    const trainer = await Trainer.findById(req.params.id);
    if (trainer) {
        res.json(trainer);
    } else {
        res.status(404).json({ message: 'Trainer not found' });
    }
};

module.exports = { getTrainers, getTrainerById };
