##Zetta led driver for any platform

###Install

```
$> git clone https://github.com/zettajs/zetta-led-driver zetta-{device}-{platform}-driver
```

###Usage

```
var zetta = require('zetta');
var led = require('zetta-led-driver');

zetta()
  .use(led)
  .listen(1337)
```

### Hardware

* any platform

###Transitions

#####do(message)

Calls the device's log() function passing the message param.

###Design

This device driver is designed to be the led code for other device drivers.