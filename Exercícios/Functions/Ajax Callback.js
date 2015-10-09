/*

Adicione na function que faz chamadas ajax um argumento de callback que determine como o request será logado
	-document.write();
	-console.log();
	-alert();

	Também recebe um callback de erro, caso a url não contenha "https://" ele loca uma mensagem nada agradável

*/

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



