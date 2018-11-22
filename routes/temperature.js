var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    console.log('Something is happening in temperature.');
    next();
});

/**
 * @route POST /temperature
 * @group temperature - Operations about user
 * @param {integer} temperature.query.required - register temperature 
 * @param {string}  date.query.required - the record date
 * @returns {object} 201 - The registred temperature
 * @returns {object} 500 - Internal server error
 */
router.post('/', function (req, res) {
    res
        .status(201)
        .json({
            id: 1,
            temperature: req.query.temperature,
            date: req.query.date
        });
});

/**
 * @route GET /temperature
 * @group temperature - Operations about user
 * @param {integer} id.query.required - register temperature record id
 * @returns {object} 201 - The temperature record
 * @returns {object} 500 - Internal server error
 */
router.get('/', function (req, res) {
    res
        .status(200)
        .json({
            id: req.query.id,
            temperature: 34,
            date: new Date()
        });
});

module.exports = router;