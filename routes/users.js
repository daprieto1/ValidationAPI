var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    console.log('Something is happening in users.');
    next();
});

/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our rest video api!' });
});


router.route('/videos')

    .post(function (req, res) {

        var video = new Video();
        video.title = req.body.title;

        video.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Video criado!' });
        });


    })

    .get(function (req, res) {
        Video.find(function (err, videos) {
            if (err)
                res.send(err);

            res.json(videos);
        });
    });

module.exports = router;