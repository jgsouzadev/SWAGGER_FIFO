'use strict';


/**
 * Desativa dados da notificação
 * Essa rota alterna os status do receiveEmail
 *
 * xAccessToken String token gerado por login ou criação de usuário
 * returns inline_response_200_10
 **/
exports.disableNotification = function(xAccessToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "Status updated with sucessfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtem os dados da plataforma
 * Essa rota retorna os dados das plataformas
 *
 * returns inline_response_200_8
 **/
exports.getAllQueueData = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "size" : 11,
  "id_platform" : 2
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
 * platform Integer ID of platform to get the user position
 * xAccessToken String token gerado por login ou criação de usuário
 * returns inline_response_200_9
 **/
exports.polling = function(platform,xAccessToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "position" : 6
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
 * xAccessToken String token gerado por login ou criação de usuário
 * returns inline_response_201_5
 **/
exports.removeQueue = function(platform,xAccessToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "Exited with sucessfully"
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
 * xAccessToken String token gerado por login ou criação de usuário
 * returns inline_response_201_4
 **/
exports.storeQueue = function(platform,xAccessToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "User is on queue",
  "notification" : true,
  "position" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

