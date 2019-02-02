const router = require("express").Router();
const itemRoutes = require("./tobuy");
const userRoutes = require("./users");

router.use("/api/tobuy", itemRoutes);
router.use("/api/users", userRoutes);

module.exports = router;