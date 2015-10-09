
/*
Faça uma function que simule chamadas ajax
	- Ela recebe dois argumentos do tipo string: tipo e o url da chamada, ex: “GET”, “POST”, “DELETE”;
	- E simplesmente loga o dado de acordo com o tipo da chamada Ex: Fazendo um POST para http://www.sega.com

Pendure na function outras functions que sirvam de atalhos para as chamadas acima
	-Ex: chamarAjax.get() ao ser invocado, chamara a própria function já passando “GET”

Altere a function para realizar todas as chamadas que são passadas independentemente da quantidade de argumentos
	-Ex: chamarAjax(“get”,”sega.com”,”ndd.com”,”moc.com”)

*/

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



