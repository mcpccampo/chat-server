// module import
const express = require('express');
const msgCtr = require('./controllers/messages_controller');

// Config
const PORT = 3050;

// Setup Server
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

// Server Api Routes
app.get('/api/messages', msgCtr.read);
app.post('/api/messages', msgCtr.create);
app.post('/api/messages/:id', msgCtr.update);
app.delete('/api/messages/:id', msgCtr.delete);

app.listen(PORT, () => {
  console.clear();
  console.log(`App started on port# ${PORT}`);
  console.log('=========================');
});
