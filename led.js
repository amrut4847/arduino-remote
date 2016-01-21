var Device = require('zetta-device');
var util = require('util');

var led = module.exports = function(options) {
  Device.call(this);
  this._default = options['default'];
};
util.inherits(led, Device);

led.prototype.init = function(config) {
  config
  .name('led')
  .type('led')
  .state('waiting')
  .when('waiting', { allow: ['do']})
  .when('doing', { allow: [] })
  .map('do', this.do, [
    { name: 'message', type: 'text'}
  ]);
};

led.prototype.do = function(message, cb) {
  this.state = 'doing';
  this.log(this._default + ': ' + message);
  this.state = 'waiting';
  cb();
};
