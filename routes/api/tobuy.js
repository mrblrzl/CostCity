
const router = require ("express").Router();
// const router = express.Router();
// const Tobuy = require("../models/tobuy");
const itemsControllers = require("../../controllers/itemsControllers");

// Matches with "/api/books"
router.route("/")
 .get(itemsControllers.findAll)
 .post(itemsControllers.create);

// Matches with "/api/books/:id"
router
 .route("/:id")
 .get(itemsControllers.findById)
 .put(itemsControllers.update)
 .delete(itemsControllers.remove);

module.exports = router;


// router.get("/tobuy", (req, res, next) => {
//   Tobuy.find({}, "action")
//   .then(data => res.json(data))
//   .catch(next)
// });

// router.post("/tobuy", (req, res, next) => {
//   if(req.body.action){
//     Todo.create(req.body)
//       .then(data => res.json(data))
//       .catch(next)
//   }else {
//     res.json({
//       error: "The input field is empty"
//     })
//   }
// });

// router.delete("/tobuy/:id", (req, res, next) => {
//   Tobuy.findOneAndDelete({"_id":req.params.id})
//     .then(data => res.json(data))
//     .catch(next)  
// })

// module.exports = router;