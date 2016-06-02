/**
 * Created by Lula on 6/1/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = mongoose.model('Message');

/* GET mockup data for inbox */
router.get('/sent', function (req, res) {
    // I base my search on sender and receiver properties, instead of ids,
    // because I cannot be sure that mongoose will assign the same ids to objects
    // at every run of database initial population.
    // This approach is inappropriate for real life application, but convenient for small test app
    Message.find({sender: 'Lula Leus'}, function(err, messages){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.json(messages);
        }
    });
});

router.get('/received', function (req, res) {
    Message.find({receiver: 'Lula Leus'}, function(err, messages){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.json(messages);
        }
    });
});

module.exports = router;
