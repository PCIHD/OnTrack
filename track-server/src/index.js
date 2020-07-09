const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoURI = 'mongodb+srv://admin:passwordpassword@cluster0.knrnv.mongodb.net/track?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
app.get('/', (req, res) => {
  res.send('hi there!');
});
mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});
mongoose.connection.on('error', (error) => {
  console.error('error connecting to mongo', error);
});
app.listen(3000, () => {
  console.log('listening on port 3000');
});
