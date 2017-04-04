//Initialize the Express web framework
var express = require('express');
var app = express();

//Native NodeJS module for resolving paths
var path = require('path');

//Set the view engine to EJS template, and set the directory where
//views will be stored to and served from
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

//Get the port from c9's environment variable: PORT
var port = process.env.PORT;

//Path where the static resources are being used from
app.use(express.static(path.resolve(__dirname, 'client')));

//Set the first route
app.get('/', function(req, res){
    res.render("index.ejs");
});

//When the server is running, listen to the port and do something ...
app.listen(port, function(){
    console.log("SERVER RUNNING AT PORT ... "+port);
});