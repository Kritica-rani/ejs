const express = require("express");
const app = express();
const port = 3000;
// import route folder
const Router = require("./routes/pageRoutes");
//add ejs
app.set("view engine", "ejs");
app.set("views", "frontend");
//middleware
app.use("/", Router);

app.listen(port, (err) => {
  if (err) {
    console.log("error", err);
  }
  console.log("server is up and running ", port);
});
