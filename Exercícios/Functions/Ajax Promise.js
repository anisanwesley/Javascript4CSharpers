
/*
Faça a classe AjaxWithPromise que retorna uma promise com o resultado da operação
*/

var Promise = Promise || function(){}
function AjaxWithPromise(url){
  
  var promise = new Promise(function(accept,reject){
    var isValid = url.indexOf('https://')>=0; 
    
    return isValid ? accept(url) : reject("Deu ruim!");
        
  });
  
  return promise;
   
 }

var successConsole = function(data){
  console.info('deu boa com '+data);
};
var successAlert = function(data){
  alert('deu boa com '+data);
};
var error = function(data){
  console.error('deu ruim com '+data);
};

AjaxWithPromise("https://www.com.br").then(
    successConsole,
    error
);

AjaxWithPromise("http://www.com.br").then(
    successConsole,
    error
);