var express = require('express');
var router = express.Router();
var Device = require('./models/device');

router.use(function (req, res, next) {
    console.log('Something is happening in users.');
    next();
});

/**
 * @route POST /devices
 * @group devices - Operations about user
 * @param {Device.model} device.body.required - The device
 * @returns {object} 201 - The updated user
 * @returns {object} 500 - Internal server error
 * @consumes application/json
 */
router.post('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our rest video api!' });
});

module.exports = router;