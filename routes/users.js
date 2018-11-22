var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    console.log('Something is happening in users.');
    next();
});

/**
 * @route PUT /users
 * @group foo - Operations about user
 * @param {string} name.query.required - name 
 * @returns {object} 200 - The updated user
 * @returns {object} 500 - Internal server error
 */
router.put('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our rest video api!' });
});

module.exports = router;