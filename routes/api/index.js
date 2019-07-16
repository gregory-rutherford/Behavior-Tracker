const router = require("express").Router();


const chartRoutes = require("./charts");
const userRoutes = require("./users");


router.use("/users", userRoutes);
router.use("/charts", chartRoutes);

module.exports = router;
