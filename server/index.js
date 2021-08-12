require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { CONNECTION_STRING } = process.env;
const PORT = process.env.PORT || 5000;

const { getHeroes } = require('./controller.js');

const app = express();

app.use(express.json());

massive({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('DB connection established successfully!');
}).catch(err => {
    console.log(`Error connecting to DB: ${err}`);
})

// ENDPOINTS

app.get('/api/heroes', (req, res) => {
    console.log(req);
    res.status(200).send(`I'm connected to the endpoint!`);
});



app.listen(process.env.PORT || 5000, () => console.log(`Listening on port: ${process.env.PORT}`));