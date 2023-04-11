const asyncHandler = require("express-async-handler");
const Worker = require("../models/workerModel");

// @desc    Get all workers
// @route   GET /api/workers
// @access  Private
const getWorkers = asyncHandler(async (req, res) =>
{
  const workers = await Worker.find({});
  res.json(workers);
}
);

// @desc    Get worker by id
// @route   GET /api/workers/:id
// @access  Private
const getWorkerById = asyncHandler(async (req, res) =>
{
  const worker = await Worker.findById(req.params.id);
  if (worker)
  {
    res.json(worker);
  } else
  {
    res.status(404);
    throw new Error("Worker not found");
  }
}
);


// @desc    Create worker
// @route   POST /api/workers
// @access  Private
const createWorker = asyncHandler(async (req, res) =>
{
    // client add worker to farm
    const {
        name,
        phone, 
        address,
        note,
      
    } = req.body;

    const worker = new Worker({
        name,
        phone,
        address,
        note,
    });

    const createdWorker = await worker.save();
    res.status(201).json(createdWorker);
}
);


  

// @desc    Update worker
// @route   PUT /api/workers/:id
// @access  Private
const updateWorker = asyncHandler(async (req, res) =>
{
  const worker = await Worker.findById(req.params.id);
  if (worker)
  {
    worker.name = req.body.name || worker.name;
    worker.phone = req.body.phone || worker.phone;
    worker.email = req.body.email || worker.email;
    worker.address = req.body.address || worker.address;
    worker.salary = req.body.salary || worker.salary;
    worker.note = req.body.note || worker.note;

    const updatedWorker = await worker.save();
    res.json(updatedWorker);
  } else
  {
    res.status(404);
    throw new Error("Worker not found");
  }
}
);
    
// @desc    Delete worker
// @route   DELETE /api/workers/:id
// @access  Private
    const deleteWorker = asyncHandler(async (req, res) =>
    {
        const worker = await Worker.findById(req.params.id);
        if (worker)
        {
            await worker.remove();
            res.json({ message: "Worker removed" });
        } else
        {
            res.status(404);
            throw new Error("Worker not found");
        }
    }
    );

    module.exports = {
        getWorkers,
        getWorkerById,
        createWorker,
        updateWorker,
        deleteWorker,
    };



    
        

    
