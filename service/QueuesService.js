'use strict';


/**
 * Remove o usuário da fila
 * Essa rota atualiza o status na fila para 0
 *
 * platform Object 
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
 * platform Object 
 * returns inline_response_201_2
 **/
exports.storeQueue = function(platform) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "User is on queue"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

