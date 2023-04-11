const express = require("express");
const router = express.Router();

// get function from client controller
const {
    registerClient,
    authClient,
    getClient,
    updateClient,
    getClients,
    getClientById,

} = require("../controller/clientController");

// get function from farm controller
const {
    getFarms,
    getFarmById,
    createFarm,
    updateFarm,
    deleteFarm,
    totalFarms,
} = require("../controller/farmController");

// dte function from cattle controller
const {
    getCattle,
    getCattleById,
    createCattle,
    updateCattle,
    deleteCattle,
} = require("../controller/cattleController");

// milk controller functions
const {
    getMilk,
    getMilkById,
    createMilk,
    updateMilk,
    deleteMilk,
} = require("../controller/milkController");

// worker controller functions
const { 
    getWorkers,
    getWorkerById,
    createWorker,
    updateWorker,   
    deleteWorker,
} = require("../controller/workerController");



//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// Client routes
router.route("/login").post(authClient);
router.route("/register").post(registerClient);
router.route("/updateClient/:id").put( updateClient);
router.route("/getClient/:id").get( getClient);
router.route("/getClients").get(getClients);
router.route("/getClientById/:id").get(getClientById);

// Create route for farm
router.route("/totalFarms").get( totalFarms);
router.route("/getFarms").get( getFarms);
router.route("/getFarmById/:id").get( getFarmById);
router.route("/createFarm").post( createFarm);
router.route("/updateFarm/:id").put( updateFarm);
router.route("/deleteFarm/:id").delete( deleteFarm);

// Create route for cattle
router.route("/getCattle").get( getCattle);
router.route("/getCattleById/:id").get( getCattleById);
router.route("/createCattle").post( createCattle);
router.route("/updateCattle/:id").put( updateCattle);
router.route("/deleteCattle/:id").delete(deleteCattle);

// Create route for milk
router.route("/getMilk").get(getMilk);
router.route("/getMilkById/:id").get(getMilkById);
router.route("/createMilk").post(createMilk);
router.route("/updateMilk/:id").put(updateMilk);
router.route("/deleteMilk/:id").delete(deleteMilk);


// Create route for worker
router.route("/getWorkers").get(getWorkers);
router.route("/getWorkerById/:id").get(getWorkerById);
router.route("/createWorker").post(createWorker);
router.route("/updateWorker/:id").put(updateWorker);
router.route("/deleteWorker/:id").delete(deleteWorker);







// export route file
module.exports = router;
