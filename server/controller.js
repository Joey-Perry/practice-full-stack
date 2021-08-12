const getHeroes = (req, res) => {
    const db = req.app.get('db');
    console.log("I'm searching the database...");
    db.get_heroes()
        .then(heroes => res.status(200).send(heroes))
        .catch(err => {
            console.log(`Error retrieving data: ${err}`);
            res.status(400).send(err);
        })
}

module.exports = { getHeroes };