const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    credentials: true,
  },
  allowEIO3: true,
  transports: ["websocket"],
});

app.use(express.json());
app.use(cors({ origin: "http://localhost:3001" }));

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/", (req, res) => {
  io.emit("update", req.body);
  console.log(req.body);
  res.status(200);
  res.end();
});
