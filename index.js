var Scout = require('zetta-scout');
var util = require('util');
var led = require('./led');

var ledScout = module.exports = function() {
  Scout.call(this);
};
util.inherits(ledScout, Scout);

ledScout.prototype.init = function(next) {

  var self = this;

  var query = this.server.where({type: 'led'});
  var options = {default: 'DEFAULT'};

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], led, options);
    } else {
      self.discover(led, options);
    }
  });

  next();

};
