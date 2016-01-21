var LED = require('zetta-led-mock-driver');

zetta()
  .use(LED)
  .link('http://lit-atoll-8587.herokuapp.com/')
  .listen(1337);
