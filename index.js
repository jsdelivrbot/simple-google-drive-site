var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var app = express();
var fname = "/tmp/googledocs.json";


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
  //response.render('pages/index');
  response.sendFile(path.join(__dirname, '../tmp', fname));
});

app.post('/', function(request, response) {
    console.log('Request recieved', request.headers);
    fs.writeFile(fname, request.body, function(err) {
        if(err) {
            console.log(err);
            response.send('{"success":"false"}');
        } else {
            console.log("Saved to file", fname);
            response.send('{"success":"true"}');
        }
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// database

