/**
 * Created by Lula on 6/1/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = mongoose.model('Profile');

//Users profiles
router.route("/")
    //create new profile
    .post(function(req,res){
        // console.log(req.body);
        var profile = new Profile(req.body);
        profile.save();
        res.status(201).send({status:"success"});
    })
    //get all existing profiles from database
    .get(function (req, res) {
        Profile.find(function(err, profiles){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.json(profiles);
            }
        });
    });

module.exports = router;
