'use strict';

var utils = require('../utils/writer.js');
var Filials = require('../service/FilialsService');

module.exports.storeFilial = function storeFilial (req, res, next) {
  var user = req.swagger.params['user'].value;
  Filials.storeFilial(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
