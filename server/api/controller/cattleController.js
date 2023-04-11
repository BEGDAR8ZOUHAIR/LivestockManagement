const asyncHandler = require("express-async-handler");
const Cattle = require("../models/cattleModel");
const Client = require("../models/clientModel");


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
        gender,
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
        gender,
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
        gender,
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
        cattle.name = req.body.name || cattle.name;
        cattle.type = req.body.type || cattle.type;
        cattle.age = req.body.age || cattle.age;    
        cattle.gender = req.body.gender || cattle.gender;
        cattle.weight = req.body.weight || cattle.weight;
        cattle.birthDate = req.body.birthDate || cattle.birthDate;
        cattle.dateOfEntry = req.body.dateOfEntry || cattle.dateOfEntry;
        cattle.obtainedFrom = req.body.obtainedFrom || cattle.obtainedFrom;
        cattle.obtainedBy = req.body.obtainedBy || cattle.obtainedBy;
        cattle.status = req.body.status || cattle.status;
        cattle.mother = req.body.mother || cattle.mother;
        cattle.father = req.body.father || cattle.father;
        cattle.note = req.body.note || cattle.note;
        cattle.image = req.body.image || cattle.image;
        

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
});

// @desc   Total cattle
// @route   GET /api/cattle/total
// @access  Private
const totalCattle = asyncHandler(async (req, res) =>
{
    const total = await Cattle.countDocuments();
    res.json(total);
}
);

module.exports = {
    getCattle,
    getCattleById,
    createCattle,
    updateCattle,
    deleteCattle,
    totalCattle,
};


