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

//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// Client routes
router.route("/login").post(authClient);
router.route("/register").post(registerClient);
router.route("/update/:id").put(protect, updateClient);
router.route("/getClient/:id").get(protect, getClient);
router.route("/getClients").get(getClients);
router.route("/getClientById/:id").get(getClientById);

// Create route for farm
router.route("/totalFarms").get(protect, totalFarms);
router.route("/getFarms").get(protect, getFarms);
router.route("/getFarmById/:id").get(protect, getFarmById);
router.route("/createFarm").post(protect, createFarm);
router.route("/updateFarm/:id").put(protect, updateFarm);
router.route("/deleteFarm/:id").delete(protect, deleteFarm);

// Create route for cattle
router.route("/getCattle").get(protect, getCattle);
router.route("/getCattleById/:id").get(protect, getCattleById);
router.route("/createCattle").post(protect, createCattle);
router.route("/updateCattle/:id").put(protect, updateCattle);
router.route("/deleteCattle/:id").delete(protect, deleteCattle);



// export route file
module.exports = router;
