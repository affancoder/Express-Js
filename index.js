const express = require("express");

const app = express();

let port = 8080;

app.get("/", (req, res) => {
  console.log("You are on root path");
  res.send("root path");
});

app.get("/apple", (req, res) => {
  res.send("You connected to apple path");
});

app.get("/mango", (req, res) => {
  res.send("You connected to mango path");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let text = `<h1>Connected to ${username} with id of ${id}<h1/>`;
  res.send(text);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("Nothing Searched");
  }
  res.send(`<h2>search result for query:${q}<h2/>`);
});

app.get("*", (req, res) => {
  res.send("Wrong path");
});

// app.use((req, res) => {
//   console.log("Request received");
//   // res.send({
//   //   name: "Affan",
//   //   class: "Student",
//   // });
//   let code = "<h1>I love Programming<h1/>";
//   res.send(code);
// });

app.listen(port, function () {
  console.log(`Server is listening to port ${port}`);
});
