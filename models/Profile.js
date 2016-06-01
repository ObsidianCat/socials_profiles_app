/**
 * Created by Lula on 6/1/2016.
 */
/**
 * Created by Lula on 5/31/2016.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var profileModel = new Schema({
    fullName:String,
    shortTitle:String,
    status:String,
    pictureUrl:String,
    numOfFriends:{type:Number, default:0},
    numOfPhotos:{type:Number, default:0},
    numOfLikes:{type:Number, default:0}
});


module.exports = mongoose.model("Profile", profileModel);