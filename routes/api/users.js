const usersControllers = require("../../controllers/usersControllers");
const router = require("express").Router();
// Matches with "/api/books"
router.route("/")
 .get(usersControllers.findOne)
 .post(usersControllers.create);

// Matches with "/api/books/:id"
router
 .route("/:id")
 .get(usersControllers.findById)
//  .post(usersControllers.create)
 .delete(usersControllers.remove);

module.exports = router;