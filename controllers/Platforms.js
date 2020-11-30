'use strict';

var utils = require('../utils/writer.js');
var Platforms = require('../service/PlatformsService');

module.exports.getPlatform = function getPlatform (req, res, next) {
  var id = req.swagger.params['id'].value;
  Platforms.getPlatform(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storePlatform = function storePlatform (req, res, next) {
  var plataforma = req.swagger.params['plataforma'].value;
  Platforms.storePlatform(plataforma)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
