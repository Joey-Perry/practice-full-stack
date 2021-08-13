require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { CONNECTION_STRING } = process.env;
const PORT = process.env.PORT || 5000;

const { getHeroes } = require('./controller.js');

const app = express();

app.use(express.json());

massive({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('DB connection established successfully!');
}).catch(err => {
    console.log(`Error connecting to DB: ${err}`);
});

// ENDPOINTS
// app.get('/', ()=> console.log('Default page...'));
app.get('/api/heroes', getHeroes);



app.listen(process.env.PORT || 5000, () => console.log(`Listening on port: ${process.env.PORT}`));