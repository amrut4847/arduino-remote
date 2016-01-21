var zetta = require('zetta');
var Starter = require('../index');
var app = require('./apps/starter');
var LED = require('zetta-led-mock-driver');

zetta()
  //.use(Starter)
  //.use(app)
  .use(LED)
  .listen(1337);
