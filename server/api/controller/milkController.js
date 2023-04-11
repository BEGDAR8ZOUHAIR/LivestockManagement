const asyncHandler = require("express-async-handler");
const Milk = require("../models/milkModel");


// @desc    Get all milk
// @route   GET /api/milk
// @access  Private
const getMilk = asyncHandler(async (req, res) => {
    const milk = await Milk.find({});
    res.json(milk);
}
);

// @desc    Get milk by id
// @route   GET /api/milk/:id
// @access  Private
const getMilkById = asyncHandler(async (req, res) => {
    const milk = await Milk.findById(req.params.id);
    if (milk) {
        res.json(milk);
    } else {
        res.status(404);
        throw new Error("Milk not found");
    }
}
);

// @desc    Create milk
// @route   POST /api/milk
// @access  Private
const createMilk = asyncHandler(async (req, res) =>
{
    // client add milk to farm
    const {
        date,
        type,
        AMTotal,
        PMTotal,
        Total,
        totalUsed,
        note,
    } = req.body;

    const milk = new Milk({
        date,
        type,
        AMTotal,
        PMTotal,
        Total,
        totalUsed,
        note,
    });

    const createdMilk = await milk.save();
    res.status(201).json(createdMilk);
}
);

// @desc    Update milk
// @route   PUT /api/milk/:id
// @access  Private
const updateMilk = asyncHandler(async (req, res) =>
{
    const milk = await Milk.findById(req.params.id);
    if (milk)
    {
        milk.date = req.body.date || milk.date;
        milk.type = req.body.type || milk.type;
        milk.AMTotal = req.body.AMTotal || milk.AMTotal;
        milk.PMTotal = req.body.PMTotal || milk.PMTotal;
        milk.Total = req.body.Total || milk.Total;
        milk.totalUsed = req.body.totalUsed || milk.totalUsed;  
        milk.note = req.body.note || milk.note;

        const updatedMilk = await milk.save();
        res.json(updatedMilk);
    } else
    {
        res.status(404);
        throw new Error("Milk not found");
    }
}
);

// @desc    Delete milk
// @route   DELETE /api/milk/:id
// @access  Private
const deleteMilk = asyncHandler(async (req, res) => 
{
    const milk = await Milk.findById(req.params.id);
    if (milk)
    {
        await milk.remove();
        res.json({ message: "Milk removed" });
    } else
    {
        res.status(404);
        throw new Error("Milk not found");
    }
}
);

module.exports = {
    getMilk,
    getMilkById,    
    createMilk,
    updateMilk, 
    deleteMilk,
};


    
    


