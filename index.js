var irc = require('irc'),
    child_process = require('child_process');

var client = new irc.Client( process.env.IRC_SERVER, 'ircbot', {
  channels: [ process.env.IRC_CHANNEL ]
});

client.addListener('message', function (from, to, message) {
});
