var capsRate = require('caps-rate');

function plugin() {
  return function(irc){
    irc.on('message', function(evt) {
      var from = evt.from;
      var to = evt.to;
      var message = evt.message;

      if (message.length > 5 && capsRate(message) >= 0.55) {
        var destination = to.charAt(0) === '#' ? to : from;
        irc.send(destination, '.timeout ' + from + ' 2');
        irc.send(destination, 'STOP SCREAMING ' + from + '!');
      }
    });
  };
}

module.exports = plugin;