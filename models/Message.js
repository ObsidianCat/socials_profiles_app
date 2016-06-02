/**
 * Created by Lula on 6/1/2016.
 */
var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

//in real world application a sender and user would be database given ids
//example  sender:{type:mongoose.Schema.Types.ObjectId, ref:'Profile'},
var messageModel = new Schema({
    sender:String,
    receiver:String,
    title:String,
    body:String,
    isStarred:{type:Boolean, default:false},
    attachment:{type:Boolean, default:false},
    date:{type: Date, default: Date.now}
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