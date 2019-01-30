require("./models/connections");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const {userController} = require("./controllers");
const apiRouter = express.Router()
apiRouter.post("/users", userController.login)
apiRouter.get("/users/:userId",userController.getUser)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api", apiRouter)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.use((err,req,res,next)=>{
  return res.status(400).json(err)
})
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// did this got to master?