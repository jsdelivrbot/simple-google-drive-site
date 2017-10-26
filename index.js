var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// routes
app.get('/', function(request, response) {
  var googleDocsFilepath = getJsonFilepath();
  //response.render('pages/index');
  console.log(googleDocsFilepath);
  response.sendFile(googleDocsFilepath);
});

app.post('/', function(request, response) {
    console.log('Request recieved', request.headers);
    if (isAuthorized(request.headers.authorization)) {
      writeJsonFile(getJsonFilepath(), request.body, function(err){
        if (err) {
          response.status(500).send('Error saving data');
        } else {
          response.send('{"success":"true"}');
        }
      });
    } else {
      response.status(400).send('Bad authorization');
    }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


function getJsonFilepath() {
   const jsonFile = "/tmp/googledocs.json";
   return path.join(__dirname, '', jsonFile);
}

function writeJsonFile(filepath, json, callback) {
  var jsonString = JSON.stringify(json);
  var filepath = getJsonFilepath();
  fs.writeFile(filepath, jsonString, function(err) {
      if(err) {
          console.log('File write error', err);
          callback(err);
      } else {
          console.log("Saved to file", filepath);
          callback();
      }
  });
}

function isAuthorized(authorization) {
  return authorization == "password=password0";
}
