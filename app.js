var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Message = require('./models/Message');
var Profile = require('./models/Profile');

mongoose.connect('mongodb://localhost/social');

var routes = require('./routes/index');
var users = require('./routes/users');
var profiles = require('./routes/profiles');
var messages = require('./routes/messages');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/vendorAssets', express.static(__dirname + '/node_modules/'));

app.use('/', routes);
app.use('/users', users);
app.use('/profiles', profiles);
app.use('/messages', messages);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// Init DB

(function initDB() {
  function findOrCreate(user) {
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

  var fs = require('fs');
  fs.readFile('./data/initUsersData.json', 'utf8', function(err, data) {
    if (err) throw err;
    var users = JSON.parse(data);

    if (users && users.length) {
      for (var i = 0; i < users.length; i++) {
        findOrCreate(users[i]);
      }
    }
  });
})();


module.exports = app;