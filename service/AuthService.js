'use strict';


/**
 * Faz autenticação do usuário
 * Essa rota faz o login de usuário
 *
 * user User_1 
 * returns inline_response_200_4
 **/
exports.authentication = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "auth" : true,
  "id_platform" : 2,
  "token" : "jwttoken4981581573fhsdofjdsnfo23yr"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove token de autenticação
 * Essa rota faz anula o token de login
 *
 * returns inline_response_200_5
 **/
exports.destroy = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "auth" : false,
  "token" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Valida se o usuário está na fila apartir do token
 * Validação para em casos de refresh
 *
 * xAccessToken String token gerado por login ou criação de usuário
 * returns inline_response_200_3
 **/
exports.validate = function(xAccessToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "auth" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

