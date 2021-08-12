require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { CONNECTION_STRING } = process.env;
const PORT = process.env.PORT || 5000;

const { getHeroes } = require('./controller.js');

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('DB connection established successfully!');
}).catch(err => {
    console.log(process.env.DATABASE_URL)
    console.log(`Error connecting to DB: ${err}`);
});

// ENDPOINTS

app.get('/api/heroes', (req, res) => {
    console.log(req);
    getHeroes();
});



app.listen(process.env.PORT || 5000, () => console.log(`Listening on port: ${process.env.PORT}`));