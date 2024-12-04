import express from "express";
const app = express();
const port = 3000;
import path from "path";

app.use(express.static("public"));

// routes
//  "/" : home | root route

app.route("/").get(function (req, res) {
  res.sendFile(path.resolve(process.cwd(), "pages", "index.html"));
});
app.route("/about").get(function (req, res) {
  res.sendFile(path.resolve(process.cwd(), "pages", "about.html"));
});

app.use(function (req, res) {
  res.send("Page Not Found : 404");
});

// creating a local server
app.listen(port, function () {
  console.log("server started on port:", port);
});
