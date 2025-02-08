const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const Rcon = require('rcon');

const host = 'localhost';
const rconPort = 12345;
const password = 'rconpassword';

const rcon = new Rcon(host, rconPort, password);

rcon.on('auth', () => {
    console.log('Rcon connection established.');
})
.on('response', (response) => {
    console.log('Response:', response);
})
.on('end', () => {
    console.log('Connection closed.');
})
.on('error', (err) => {
    console.error('Connection Error:', err);
});

rcon.connect();

app.post('/send-command', (req, res) => {
  const { command } = req.body;
  if (!command) {
      return res.status(400).json({ error: 'Komut gereklidir' });
  }
  rcon.send(command);
  res.json({ message: `Command send: ${command}` });
});


app.listen(port, () => { console.log(`Server is running on port ${port}`); })
