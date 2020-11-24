'use strict';


/**
 * Remover usuário por ID
 *
 * id Integer ID of user to get the data before deleted
 * returns inline_response_200_2
 **/
exports.deleteById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "User deleted with sucess"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna um usuário
 * Essa rota busca dados de 1 usuário
 *
 * id Integer ID of user to get the data
 * returns inline_response_200
 **/
exports.index = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_filial" : 1,
  "name" : "João Guilherme",
  "id" : 1,
  "email" : "João Guilherme"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna todos os usuários
 * Essa rota retorna todos os usuários
 *
 * returns inline_response_200
 **/
exports.indexAll = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_filial" : 1,
  "name" : "João Guilherme",
  "id" : 1,
  "email" : "João Guilherme"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cadastra usuário
 * Essa rota faz o cadastro de usuários
 *
 * user User 
 * returns inline_response_201
 **/
exports.storeUser = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "msg" : "Usuário cadastrado com sucesso",
  "token" : "eu281r89u3tjedssd12h8ygjsa"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um usuário
 * Essa rota atualiza dados de 1 usuário
 *
 * id Integer ID of user to get the data before updated
 * userNewData UserNewData  (optional)
 * returns inline_response_200_1
 **/
exports.update = function(id,userNewData) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "Nova senha",
  "name" : "Novo nome",
  "email" : "Novo email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

