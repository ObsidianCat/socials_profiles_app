/**
 * Created by Lula on 6/3/2016.
 */
var Message = require('../models/Message');
var Profile = require('../models/Profile');

function clearDB() {
    Profile.remove({}, function() {
        console.warn("All profiles removed");
    });

    Message.remove({}, function() {
        console.warn("All messages removed");
    })
}


function initDB() {
    function findOrCreateUser(user) {
        Profile.find({"fullName":user.fullName}, function(err, dbUser) {
            if (err) throw err;

            if (dbUser.length == 0) {
                var newUser = Profile(user);
                newUser.save(function(err) {
                    if (err) throw err;

                    console.log('User created!');
                });
            }
            else {
                console.log(user.fullName + " already exists");
            }
        });
    }

    function findOrCreateMessage(message) {
        Message.find({"title":message.title}, function(err, dbMessage) {
            if (err) throw err;

            if (dbMessage.length == 0) {
                var newMessage = Message(message);
                newMessage.save(function(err) {
                    if (err) throw err;

                    console.log('Message created!');
                });
            }
            else {
                console.log(message.title + " already exists");
            }
        });
    }

    var fs = require('fs');
    fs.readFile('./data/initUsersData.json', 'utf8', function(err, data) {
        if (err) throw err;
        var users = JSON.parse(data);

        if (users && users.length) {
            for (var i = 0; i < users.length; i++) {
                findOrCreateUser(users[i]);
            }
        }
    });
    fs.readFile('./data/initMessagesData.json', 'utf8', function(err, data) {
        if (err) throw err;
        var messages = JSON.parse(data);

        if (messages && messages.length) {
            for (var i = 0; i < messages.length; i++) {
                findOrCreateMessage(messages[i]);
            }
        }
    });
};

var dbActions = {
    init: initDB,
    clear:clearDB
};

module.exports = dbActions;
