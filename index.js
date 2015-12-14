var express = require('express');
var five = require("johnny-five");
var EtherPort = require("etherport");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
/*var board = new five.Board({ 
  port: new EtherPort(3030) 
});
 
board.on("ready", function() {
  var led = new five.Led(8);
  led.blink(500);
})*/
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


