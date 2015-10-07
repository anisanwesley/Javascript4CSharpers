


function Ajax(tipo, url){
	
	console.log("Fazendo um "+tipo," para "+url);
}

Ajax.get = function(){
  
  for(var i in arguments){
  var url = arguments[i];
	Ajax('GET',url);
  }
}

Ajax.get("google.com",'bing.com');

Ajax.post = function(url){
	Ajax('POST',url);
}
Ajax.delete = function(url){
	Ajax('DELETE',url);
}

Ajax.get('google.com','bing.com')




function AjaxWithCallback(url,successCallback,errorCallback){
   
   var isValid = url.indexOf('https://')>=0;    
   
   if(isValid) successCallback(url)
   else errorCallback(url)
   
 }

var successConsole = function(data){
  console.info('deu boa com '+data);
}
var successAlert = function(data){
  alert('deu boa com '+data);
}
var error = function(data){
  console.error('deu ruim com '+data);
}

AjaxWithCallback("https://www.com.br",successConsole,error);
AjaxWithCallback("ftp://www.com.br"  ,successAlert,error);







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