exports.index = function(req, res){
  var twilio = require('twilio')('AC28933fc5a473d25b27331917d2d7a110','196d54936ea4478a2c3d9b4328f176ef');
  twilio.sendMessage({
    to: '+14242428081',
    from: '+19492008125',
    body: 'dat body doe hehe',
  }, function(err, response) {
    console.log(response);
    res.render('whereuat');
  });
};
