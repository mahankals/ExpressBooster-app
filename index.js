const { Server, config } = require('./lib/server.js');
const server = new Server();
// const app = require('express')();

// app.get('/', (req, res) => {
//   res.send(`Welcome to myapp!`);
// })

// server.use(app);

server.on('started', () => {
  console.log();
});

server.start();
