var inherits = require('util').inherits;
var capsRate = require('caps-rate');

module.exports = function(NwitchPlugin) {
  function Plugin(bot, client) {
    NwitchPlugin.apply(this, arguments);

    this.metadata = {
      name: 'excessive-caps',
      title: 'Excessive caps',
      description: 'nwitch plugin for blocking screams',
      version: '0.0.1',
      author: 'Kenan Yildirim'
    };

    client.addListener('message', function(from, to, message) {
      if (message.length > 5 && capsRate(message) >= 0.55) {
        var destination = to.charAt(0) === '#' ? to : from;
        client.say(destination, '.timeout ' + from + ' 2');
        client.say(destination, 'STOP SCREAMING ' + from + '!');
      }
    });
  }

  inherits(Plugin, NwitchPlugin);

  return Plugin;
};