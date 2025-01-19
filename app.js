require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 5000;

//public folder
app.use(express.static("public"));

// Templating Engine
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("layout", "./layouts/main");

app.get("/about", require("./server/routes/main.routes"));
app.get("/contact", require("./server/routes/main.routes"));
app.get("/", require("./server/routes/main.routes"));

app.listen(PORT, () => {
  console.log(`App listenignnp on port: ${PORT}`);
});
