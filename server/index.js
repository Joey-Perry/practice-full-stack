require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { PORT, CONNECTION_STRING } = process.env;

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
    console.log(`Error connecting to DB: ${err}`);
})

// ENDPOINTS

app.get('/api/heroes', getHeroes);



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));