const usersControllers = require("../../controllers/usersControllers");
const router = require("express").Router();
// Matches with "/api/books"
router.route("/")
 .get(usersControllers.findAll)
 .post(usersControllers.create);

// Matches with "/api/books/:id"
router
 .route("/:id")
 .get(usersControllers.findById)
 .put(usersControllers.update)
 .delete(usersControllers.remove);

module.exports = router;