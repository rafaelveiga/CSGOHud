const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const data = require("./data.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/", (req, res) => {
  io.emit("update", req.body);
  console.log(req.body);
  res.status(200);
  res.end();
});

let currIndex = 2;
setInterval(() => {
  console.log("Sending index", currIndex);
  io.emit("update", data[currIndex]);

  currIndex = currIndex + 1;

  if (currIndex === data.length) {
    currIndex = 2;
  }
}, 500);

http.listen(3000, () => console.log("Listening for CS:GO info on :3000"));
