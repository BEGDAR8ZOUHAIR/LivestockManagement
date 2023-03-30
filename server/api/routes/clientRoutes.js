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
router.route("/deleteCattle/:id").delete( deleteCattle);



// export route file
module.exports = router;
