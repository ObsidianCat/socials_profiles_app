var express = require('express');
var router = express.Router();
var Message = mongoose.model('Message');
var Profile = mongoose.model('Profile');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route("/data/profiles")
    .post(function(req,res){
      var profile = new Profile(req.body);
      profile.save();
      res.status(201).send(profile);
    })
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
