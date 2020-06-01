const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/goals/', (req, res) => {
    console.log('hello from goals saga');
    const id = req.user.id;
    const queryString = `
    SELECT "calorie_goal", "protein_goal", "carbs_goal", "fat_goal" 
    FROM "user" 
    WHERE "id" = '${id}'
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

router.get('/totals/:date', (req, res) => {
    console.log('hello from totals saga', req.user, req.params.date);
    const id = req.user.id;
    const date = req.params.date
    const queryString = `
    SELECT SUM("calories") as "calorie_total", SUM("protein") as "protein_total", 
    SUM("carbs") as "carbs_total" , SUM("fat") as "fat_total" FROM "nutrition"
    WHERE "user_id" = '${id}';
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

router.get('/food/:date', (req, res) => {
    console.log('hello from food saga',  req.user, req.params.date);
    const id = req.user.id;
    const date = req.params.date
    const queryString = `
    SELECT * FROM "nutrition" WHERE "date" = '${date}' AND "user_id" = '${id}'
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
// SELECT SUM("calories") as "calorie_total", SUM("protein") as "protein_total", 
// SUM("carbs") as "carbs_total" , SUM("fat") as "fat_total", "calorie_goal", 
// "protein_goal", "carbs_goal", "fat_goal" FROM "user" 
// JOIN "nutrition" ON "user"."id" = "nutrition"."user_id"
// WHERE "date" = '${date}' AND "user"."id" = '${id}'
// GROUP BY "user"."id"

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('hello from saga', req.body)
    const id = req.user.id;
    const date = req.body.date;
    const description = req.body.description;
    const calories = req.body.calories;
    const protein = req.body.protein;
    const carbs = req.body.carbs;
    const fat = req.body.fat;
    const queryString = `
    INSERT INTO "nutrition" ("user_id", "date", "description", "calories", "protein", "carbs", "fat")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(queryString, [id, date, description, calories, protein, carbs, fat])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
});

module.exports = router;