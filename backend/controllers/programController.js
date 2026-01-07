const Program = require('../models/Program');

const getPrograms = async (req, res) => {
    const programs = await Program.find({});
    res.json(programs);
};

const getProgramById = async (req, res) => {
    const program = await Program.findById(req.params.id);
    if (program) {
        res.json(program);
    } else {
        res.status(404).json({ message: 'Program not found' });
    }
}

const createProgram = async (req, res) => {
    const { title, description, duration, image, intensity, schedule, benefits } = req.body;
    const program = new Program({ title, description, duration, image, intensity, schedule, benefits });
    const createdProgram = await program.save();
    res.status(201).json(createdProgram);
};

const deleteProgram = async (req, res) => {
    const program = await Program.findById(req.params.id);
    if (program) {
        await program.deleteOne();
        res.json({ message: 'Program removed' });
    } else {
        res.status(404).json({ message: 'Program not found' });
    }
};

module.exports = { getPrograms, getProgramById, createProgram, deleteProgram };
