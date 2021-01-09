// module import
const express = require('express');
const msgCtr = require('./controllers/messages_controller');

// Config
const PORT = 3050;

// Setup Server
const app = express();
app.use(express.json());

// Server Api Routes
app.get('/api/message', msgCtr.read);
app.post('/api/message', msgCtr.create);
app.post('/api/message/:id', msgCtr.update);
app.delete('/api/message/:id', msgCtr.delete);

app.listen(PORT, () => {
  console.clear();
  console.log(`App started on port# ${PORT}`);
  console.log('=========================');
});
