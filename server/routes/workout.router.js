const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */
router.get('/:search', (req, res) => {
    console.log('hello from workout saga!');
    let search = req.params.search;
    // make a request to giphy here using your API key
    console.log('/search GET');
    // axios.get('https://wger.de/api/v2/exercise/?limit=199&status=2&language=2')
    axios.get(`https://wger.de/api/v2/exercise/search/?term=${search}&limit=10&status=2&language=2`)
      .then((response) => {
        console.log(response.data);
        res.send(response.data);
      }).catch((err) => {
        console.log(err);
        res.send(500);
      });//end axios
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;