const asyncHandler = require("express-async-handler");
const Farm = require("../models/farmModel");



// @desc    Get all farms
// @route   GET /api/farm
// @access  Private
const getFarms = asyncHandler(async (req, res) => {
    const farms = await Farm.find({});
    res.json(farms);
}
);

// @desc    Get farm by id
// @route   GET /api/farm/:id
// @access  Private
const getFarmById = asyncHandler(async (req, res) => {
    const farm = await Farm.findById(req.params.id);
    if (farm) {
        res.json(farm);
    } else {
        res.status(404);
        throw new Error("Farm not found");
    }
}
);

// @desc    Create farm
// @route   POST /api/farm
// @access  Private

const createFarm = asyncHandler(async (req, res) =>
{
    // client add farm
    const {
        name,
        category,
        cattlebreed,
        cattlegroup,
        note,
        image,
    } = req.body;

    const farm = new Farm({
        name,
        category,
        cattlebreed,
        cattlegroup,
        note,
        image,
    });

    const createdFarm = await farm.save();
    res.status(201).json(createdFarm);
}
);

// @desc    Update farm
// @route   PUT /api/farm/:id
// @access  Private
const updateFarm = asyncHandler(async (req, res) =>
{
    const farm = await Farm.findById(req.params.id);

    if (farm)
    {
        farm.name = req.body.name || farm.name;
        farm.category = req.body.category || farm.category;
        farm.cattlebreed = req.body.cattlebreed || farm.cattlebreed;
        farm.cattlegroup = req.body.cattlegroup || farm.cattlegroup;
        farm.note = req.body.note || farm.note;
        farm.image = req.body.image || farm.image;

        const updatedFarm = await farm.save();
        res.json(updatedFarm);
    } else
    {
        res.status(404);
        throw new Error("Farm not found");
    }
}
);

// @desc    Delete farm
// @route   DELETE /api/farm/:id
// @access  Private
const deleteFarm = asyncHandler(async (req, res) =>
{
    const farm = await Farm.findById(req.params.id);

    if (farm)
    {
        await farm.remove();
        res.json({ message: "Farm removed" });
    } else
    {
        res.status(404);
        throw new Error("Farm not found");
    }
}
);

// @desc   total number of farms
// @route   GET /api/farm/total
// @access  Private
const totalFarms = asyncHandler(async (req, res) =>
{
    const total = await Farm.countDocuments();
    res.json(total);
}
);


module.exports = {
    getFarms,
    getFarmById,
    createFarm,
    updateFarm,
    deleteFarm,
    totalFarms,
};


