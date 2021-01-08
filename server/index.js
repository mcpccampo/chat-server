// module import
const express = require('express');
const msgCtr = require('./controllers/messages_controller');

// Config
const PORT = 3050;

// Setup Server
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.clear();
  console.log(`App started on port# ${PORT}`);
});
