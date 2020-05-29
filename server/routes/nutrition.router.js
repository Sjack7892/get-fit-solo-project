const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:date', (req, res) => {
    console.log('hello from saga',  req.user, req.params.date);
    const id = req.user.id;
    const date = req.params.date
    const queryString = `
    SELECT SUM("calories") as "calorie_total", SUM("protein") as "protein_total", 
    SUM("carbs") as "carbs_total" , SUM("fat") as "fat_total", "calorie_goal", 
    "protein_goal", "carbs_goal", "fat_goal" FROM "nutrition" 
    JOIN "user" ON "user"."id" = "nutrition"."user_id"
    WHERE "date" = '${date}' AND "user"."id" = '${id}'
    GROUP BY "user"."id"
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

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;