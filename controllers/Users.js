'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.deleteById = function deleteById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.deleteById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.index = function index (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.index(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.indexAll = function indexAll (req, res, next) {
  Users.indexAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeUser = function storeUser (req, res, next) {
  var user = req.swagger.params['user'].value;
  Users.storeUser(user)
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
  Users.update(id,userNewData)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
