const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ CSGOHud: 'CSGOHud' })
})

app.post('/', (req, res) => {
  io.emit('update', req.body);
  console.log(req.body);
  res.status(200);
  res.end();
});

http.listen(3000, () => console.log('Listening for CS:GO info on :3000'))
