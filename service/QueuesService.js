'use strict';


/**
 * Obtem os dados da plataforma
 * Essa rota retorna os dados das plataformas
 *
 * returns inline_response_200_5
 **/
exports.getAllQueueData = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "size" : 0,
  "sinucaObject" : {
    "ids" : [ 0, 0 ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtem a posicao do usuario
 * Essa rota retorna os dados das plataformas
 *
 * returns inline_response_200_6
 **/
exports.polling = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "position" : 1,
  "id_user" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove o usuário da fila
 * Essa rota atualiza o status na fila para 0
 *
 * platform Platform_1 
 * returns inline_response_201_3
 **/
exports.removeQueue = function(platform) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "Saiu com sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Insere o usuário na fila
 * Essa rota cria o registro ou atualiza o status na fila
 *
 * platform Platform 
 * returns inline_response_201_2
 **/
exports.storeQueue = function(platform) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "User is on queue",
  "position" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

