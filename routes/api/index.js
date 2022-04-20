const router = require("express").Router();

const userRoutes = require("./user-routes.js");

router.user("./user", userRoutes);




module.exports = router;