//const router = require("express").Router();

//const userRoutes = require("../user-routes.js");

//router.user("./user", userRoutes);

const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routs");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("./comments", commentRoutes);



module.exports = router;