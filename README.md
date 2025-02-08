# RCON
RCON (Remote Console) is a protocol that allows remote control of a server, commonly used for managing game servers. It enables administrators to execute commands on the server without being physically present.

RCON is widely used in games like Minecraft, Counter-Strike, Rust, ARK: Survival Evolved, and many others. It typically requires an IP address, port number, and password for authentication. Once connected, admins can issue commands such as kicking/banning players, changing server settings, and monitoring activity.

## Project
This project allows you to send commands to a server using RCON.
### Install
```bash
  git clone https://github.com/HarunBulbull/NodeJS-Rcon.git
```
```bash
  cd NodeJS-Rcon
```
Then open server.js and change the variables for your server like;
```bash
const host = 'localhost';
const rconPort = 12345;
const password = 'rconpassword';
```
Save and close server.js
```bash
  npm install
```
```bash
  npm start
```
### Usage

Using the REST API, post your command to 'http://localhost:3000/send-command' as command in the body with the json.stringify method. In the header set content-type to application-json like:
```bash
  const sendCommand = async () => {
    try {
      const res = await fetch("http://localhost:3000/send-command", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({ command: "say testing" }),
      });
    }
    catch (error) {console.error("There is an error: " + error);}
  };
```

Enjoy!
