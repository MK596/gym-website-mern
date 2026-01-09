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

module.exports = { getPrograms, getProgramById };
