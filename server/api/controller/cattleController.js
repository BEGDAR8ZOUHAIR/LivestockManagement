const asyncHandler = require("express-async-handler");
const Cattle = require("../models/cattleModel");


// @desc    Get all cattle
// @route   GET /api/cattle
// @access  Private
const getCattle = asyncHandler(async (req, res) => {
    const cattle = await Cattle.find({});
    res.json(cattle);
}
);


// @desc    Get cattle by id
// @route   GET /api/cattle/:id
// @access  Private
const getCattleById = asyncHandler(async (req, res) => {
    const cattle = await Cattle.findById(req.params.id);
    if (cattle) {
        res.json(cattle);
    } else {
        res.status(404);
        throw new Error("Cattle not found");
    }
}
);


// @desc    Create cattle
// @route   POST /api/cattle
// @access  Private
const createCattle = asyncHandler(async (req, res) =>
{
    // client add cattle to farm
    const {
        name,
        type,
        age,
        weight,
        birthDate,
        dateOfEntry,
        obtainedFrom,
        obtainedBy,
        status,
        mother,
        father,
        note,
        image,
    } = req.body;

    const cattle = new Cattle({
        name,
        type,
        age,
        weight,
        birthDate,
        dateOfEntry,
        obtainedFrom,
        obtainedBy,
        status,
        mother,
        father,
        note,
        image,
    });

    const createdCattle = await cattle.save();  
    res.status(201).json(createdCattle);
}
);


// @desc    Update cattle
// @route   PUT /api/cattle/:id
// @access  Private
const updateCattle = asyncHandler(async (req, res) => {
    const {
        name,
        type,
        age,
        weight,
        birthDate,
        dateOfEntry,
        obtainedFrom,
        obtainedBy,
        status,
        mother,
        father,
        note,
        image,
    } = req.body;

    const cattle = await Cattle.findById(req.params.id);

    if (cattle) {
        cattle.name = name;
        cattle.type = type;
        cattle.age = age;
        cattle.weight = weight;
        cattle.birthDate = birthDate;
        cattle.dateOfEntry = dateOfEntry;
        cattle.obtainedFrom = obtainedFrom;
        cattle.obtainedBy = obtainedBy;
        cattle.status = status;
        cattle.mother = mother;
        cattle.father = father;
        cattle.note = note;
        cattle.image = image;

        const updatedCattle = await cattle.save();
        res.json(updatedCattle);
    } else {
        res.status(404);
        throw new Error("Cattle not found");
    }
}
);


// @desc    Delete cattle
// @route   DELETE /api/cattle/:id
// @access  Private
const deleteCattle = asyncHandler(async (req, res) => {
    const cattle = await Cattle.findById(req.params.id);

    if (cattle) {
        await cattle.remove();
        res.json({ message: "Cattle removed" });
    } else {
        res.status(404);
        throw new Error("Cattle not found");
    }
}   
);

module.exports = {
    getCattle,
    getCattleById,
    createCattle,
    updateCattle,
    deleteCattle,
};


