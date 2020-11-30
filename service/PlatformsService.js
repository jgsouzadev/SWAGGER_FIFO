'use strict';


/**
 * Cria uma nova plataforma
 * Essa rota faz a criação de uma plataforma
 *
 * id Integer ID of platform to get the data
 * returns inline_response_200_7
 **/
exports.getPlatform = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "PS4",
  "location" : "Sala Zelda",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cria uma nova plataforma
 * Essa rota faz a criação de uma plataforma
 *
 * plataforma Plataforma 
 * returns inline_response_201_3
 **/
exports.storePlatform = function(plataforma) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "Created at success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

