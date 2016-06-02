/**
 * Created by Lula on 6/1/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = mongoose.model('Message');

/* GET mockup data for inbox */
router.get('/sent', function (req, res) {
    // var query = Message.find([{ from: 'Lula Leus' }, { to: 'Lula Leus' }]);
    // query.exec(function(err, messages){
    //     if(err){
    //         res.status(500).send(err);
    //     }
    //     else{
    //         res.json(messages);
    //     }
    // });
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
