'use strict';

var utils = require('../utils/writer.js');
var Filials = require('../service/FilialsService');

module.exports.storeFilial = function storeFilial (req, res, next) {
  var filial = req.swagger.params['filial'].value;
  Filials.storeFilial(filial)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
