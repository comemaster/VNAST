var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),

    Task = require('./api/models/taskModel'), //created model loading here
    User = require('./api/models/userModel'),
    Comment = require('./api/models/commentModel'),
    Group = require('./api/models/groupModel'),
    ChatContainer = require('./api/models/chatContainerModel'),
    Message = require('./api/models/messageModel')

    bodyParser = require('body-parser'),
    config = require('./config'),
    expressValidator = require('express-validator');
  
// DATABASE
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURL, { useNewUrlParser: true }, function(err) {
    if(err) {
        console.log(err);
        console.log("Si vklopo mongoDB ?")
        process.exit(1); 
    }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressValidator())


var routes = require('./api/routes/vnastRoutes'); //importing route
routes(app); //register the route

//docs :)
app.use('/', express.static('docs'))

// midlleware, intercepts wrong API calls and returns nicer message
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found, or url is right but method is wrong (' + req.method + ')'})
});

// START LISTNENING TO REQUESTS
app.listen(port);
console.log('VNAST RESTful API server started on port: ' + port);
