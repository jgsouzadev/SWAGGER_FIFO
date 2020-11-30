'use strict';

var utils = require('../utils/writer.js');
var Queues = require('../service/QueuesService');

module.exports.disableNotification = function disableNotification (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Queues.disableNotification(xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllQueueData = function getAllQueueData (req, res, next) {
  Queues.getAllQueueData()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.polling = function polling (req, res, next) {
  var platform = req.swagger.params['platform'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Queues.polling(platform,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeQueue = function removeQueue (req, res, next) {
  var platform = req.swagger.params['platform'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Queues.removeQueue(platform,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeQueue = function storeQueue (req, res, next) {
  var platform = req.swagger.params['platform'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Queues.storeQueue(platform,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
