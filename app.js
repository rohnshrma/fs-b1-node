import express from "express";
const app = express();
const port = 3000;

// routes
//  "/" : home | root route

app.route("/").get(function (req, res) {
  res.send("Homepage");
});
app.route("/about").get(function (req, res) {
  res.send("About Page");
});

app.use(function (req, res) {
  res.send("Page Not Found : 404");
});

// creating a local server
app.listen(port, function () {
  console.log("server started on port:", port);
});
