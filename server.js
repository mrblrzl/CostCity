
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mongoProjectTest');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes);
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


// const path = require("path");
//app.use("/api", apiRouter)












// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });
  // app.use((err,req,res,next)=>{
    //   return res.status(400).json(err)
    // })
    
    // // did this got to master?
    // const {userController} = require("./controllers");
    // const apiRouter = express.Router()
    // apiRouter.post("/users", userController.login)
    // apiRouter.get("/users/:userId",userController.getUser)
    
    // // Serve up static assets (usually on heroku)