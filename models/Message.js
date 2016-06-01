/**
 * Created by Lula on 6/1/2016.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var messageModel = new Schema({
    sender:{type:mongoose.Schema.Types.ObjectId, ref:'Profile'},
    title:String,
    body:String,
    isStarred:{type:Boolean, default:false},
    hasAttachmend:{type:Boolean, default:false}
});

module.exports = mongoose.model("Profile", profileModel);