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

    this.bot = bot;
    this.client = client;
  }

  inherits(Plugin, NwitchPlugin);

  this.client.addListener('message', function(from, to, message) {
    if (message.length > 5 && capsRate(message) >= 0.55) {
      this.client.say('.timeout ' + from + ' 2');
    }
  });

  return Plugin;
};