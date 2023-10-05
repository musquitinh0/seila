
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/add/:p1/:p2", (req, res) => {
  const p1 = Number(req.params.p1);
  const p2 = Number(req.params.p2);
  const p3 = p1 + p2
  res.send('' + p3);
});

app.get("/sub/:p1/:p2", (req, res) => {
  const p1 = Number(req.params.p1);
  const p2 = Number(req.params.p2);
  const p3 = p1 - p2
  res.send('' + p3);
});

app.get("/mul/:p1/:p2", (req, res) => {
  const p1 = req.params.p1;
  const p2 = req.params.p2;
  res.send('' + p1*p2);
});

app.get("/div/:p1/:p2", (req, res) => {
  const p1 = req.params.p1;
  const p2 = req.params.p2;
  res.send('' + p1/p2);
});


app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});