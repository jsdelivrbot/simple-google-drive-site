// server
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// routes
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/', function(request, response) {
    console.log(request.headers);
    console.log(request.body);
    response.send('{"success":"true"}');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// database

