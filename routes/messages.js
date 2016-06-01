/**
 * Created by Lula on 6/1/2016.
 */
var express = require('express');
var router = express.Router();

/* GET mockup data for inbox */
router.get('/', function(req, res, next) {
    res.json({data:[
        {
            "body":"Test message 1"
        },
        {
            "body":"Test message 2"
        }
    ]});
});

module.exports = router;
