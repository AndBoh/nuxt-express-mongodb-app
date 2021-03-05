const http = require('http');
const express = require('express');
const MongoDBDriver = require('./drivers/db/MongoDB.driver');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('*', async (req, res) => {
  const params = req.body;
  res.send(params);
});

const start = async () => {
  try {
    console.log('Application starting...');
    app.db = await MongoDBDriver.connect(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME);
    http.createServer(app).listen(80, () => {
      console.log(`Application started.`);
    });
  } catch (e) {
    console.log('App was not started.', e.message);
  }
};

start();