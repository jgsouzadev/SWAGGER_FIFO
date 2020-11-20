'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.authentication = function authentication (req, res, next) {
  var user = req.swagger.params['user'].value;
  Default.authentication(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteById = function deleteById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.deleteById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.destroy = function destroy (req, res, next) {
  Default.destroy()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.index = function index (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.index(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.indexAll = function indexAll (req, res, next) {
  Default.indexAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeFilial = function storeFilial (req, res, next) {
  var user = req.swagger.params['user'].value;
  Default.storeFilial(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeUser = function storeUser (req, res, next) {
  var user = req.swagger.params['user'].value;
  Default.storeUser(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update = function update (req, res, next) {
  var id = req.swagger.params['id'].value;
  var userNewData = req.swagger.params['userNewData'].value;
  Default.update(id,userNewData)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
