var irc = require('irc'),
    child_process = require('child_process');

var client = new irc.Client('x.x.x.x', 'Froilan', {
  channels: ['#_']
});

client.addListener('message', function (from, to, message) {
});
