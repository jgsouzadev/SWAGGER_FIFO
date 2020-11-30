'use strict';


/**
 * Cria uma nova filial
 * Essa rota faz a criação de uma filial
 *
 * filial Filial 
 * returns inline_response_200_6
 **/
exports.storeFilial = function(filial) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "11/08/2020 22:10",
  "name" : "Santos",
  "id" : 1,
  "updatedAt" : "11/08/2020 22:10"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

