'use strict';

var mmm = require('../app/js/mmm');

module.exports = function(app) {
  app.post('/mmm', function(req, res) {
    res.send({
      mean: mmm.mean(req.body),
      median: mmm.median(req.body),
      mode: mmm.mode(req.body)
    });
  });
};
