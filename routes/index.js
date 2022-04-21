const router = require("express").Router();

const apiRoutes = require("./api");

router.user("./api", apiRoutes);


router.user((req, res) => {
    res.status(404).end();
});



module.exports = router;