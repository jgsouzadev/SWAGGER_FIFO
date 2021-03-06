'use strict';


/**
 * Cria uma nova filial
 * Essa rota faz a criação de uma filial
 *
 * user User_2 
 * returns inline_response_200_4
 **/
exports.storeFilial = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "11/08/2020 22:10",
  "location" : "Santos",
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

