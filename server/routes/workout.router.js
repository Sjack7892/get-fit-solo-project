const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');


router.get('/:search', (req, res) => {
    console.log('hello from workout saga!');
    let search = req.params.search;
    console.log('/search GET');
    axios.get(`https://wger.de/api/v2/exercise/search/?term=${search}&limit=10&status=2&language=2`)
      .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }).catch((err) => {
        console.log(err);
        res.send(500);
      });//end axios
  });

  router.get('/current/:date', (req, res) => {
    console.log('hello from workout SAGA',  req.user, req.params.date);
    const id = req.user.id;
    const date = req.params.date
    const queryString = `
    SELECT * FROM "workouts" 
    WHERE "date" = '${date}' AND "user_id" = '${id}'
    ORDER BY "id"
    ;`;
    pool.query(queryString)
    .then(result => {
        console.log(result.rows);
        res.send(result.rows)
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('hello from workout saga', req.body)
    const id = req.user.id;
    const date = req.body.date;
    const type = req.body.exercise;
    const reps = req.body.reps;
    const weight = req.body.weight;
    const queryString = `
    INSERT INTO "workouts" ("user_id", "date", "type", "reps", "weight")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryString, [id, date, type, reps, weight])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
});

module.exports = router;