/**
 * Created by Lula on 6/1/2016.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var messageModel = new Schema({
    sender:{type:mongoose.Schema.Types.ObjectId, ref:'Profile'},
    receiver:{type:mongoose.Schema.Types.ObjectId, ref:'Profile'},
    title:String,
    body:String,
    isStarred:{type:Boolean, default:false},
    hasAttachmend:{type:Boolean, default:false}
});


// TODO for each user create initial messages
(function initDB() {
    var fs = require('fs');
    fs.readFile('./data/initMessagesData.json', 'utf8', function(err, data) {
        if (err) throw err;
        var messages = JSON.parse(data);
        console.log(messages[0]);
    });
})();


module.exports = mongoose.model("Message", messageModel);