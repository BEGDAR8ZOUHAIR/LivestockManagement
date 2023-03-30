const express = require("express");
const router = express.Router();

// get function from admin controller
const {
  updateAdmin,
  getAdmin,
  registerAdmin,
  authAdmin,
} = require("../controller/adminController");

// get function from client controller
const {
  getClientById,
  getClients,
  totalClients,
} = require("../controller/clientController");

// get function from farm controller
const {
  getFarms,
  getFarmById,
  totalFarms,
} = require("../controller/farmController");


//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// admin routes
router.route("/login").post(authAdmin);
router.route("/registerAdmin").post(registerAdmin);
router.route("/update/:id").put(protect, updateAdmin);
router.route("/getAdmin").get(protect, getAdmin);


// Create route for client

router.route("/totalClients").get(protect, totalClients);
router.route("/getClients").get(protect, getClients);
router.route("/getClientById/:id").get(protect, getClientById);

// Create route for farm
router.route("/totalFarms").get(protect, totalFarms);
router.route("/getFarms").get(protect, getFarms);
router.route("/getFarmById/:id").get(protect, getFarmById);


// export route file
module.exports = router;
