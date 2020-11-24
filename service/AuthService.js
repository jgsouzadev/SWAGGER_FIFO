'use strict';


/**
 * Faz autenticação do usuário
 * Essa rota faz o login de usuário
 *
 * user User_1 
 * returns inline_response_201_1
 **/
exports.authentication = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "auth" : true,
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
 * returns inline_response_200_3
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

