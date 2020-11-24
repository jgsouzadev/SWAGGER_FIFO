'use strict';

var utils = require('../utils/writer.js');
var Queues = require('../service/QueuesService');

module.exports.removeQueue = function removeQueue (req, res, next) {
  var platform = req.swagger.params['platform'].value;
  Queues.removeQueue(platform)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeQueue = function storeQueue (req, res, next) {
  var platform = req.swagger.params['platform'].value;
  Queues.storeQueue(platform)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
