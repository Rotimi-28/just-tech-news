//const router = require("express").Router();

//const userRoutes = require("../user-routes.js");

//router.user("./user", userRoutes);

const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routs");

router.use("/users", userRoutes);
//router.use("/posts", postRoutes);

module.exports = router;


//module.exports = router;