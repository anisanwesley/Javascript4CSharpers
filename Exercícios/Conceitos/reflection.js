console.clear();

/*
Utilizando for(var prop in obj){}
Faça uma function que receba um objeto e logue para cada uma das propriedades dele:
	-Nome da propriedade
	-Valor
	-Tipo do valor
	-Valor como String
	-Valor como Numero
	-Valor como Boleano

	Se uma das propriedades for objeto, as propriedades deste devem ser logadas também
*/


var objeto = {
  
nome:'dfs',
  idade:432,
  sexo:"F",
  fun:function(){},
  anima:{
    raça:'cutelo negro'
  }
};

function log(obj){
for(var prop in obj){
  
  
  var type = typeof obj[prop];
  console.log(prop +
              " vale "+
              obj[prop]+
              " sendo do tipo "+
              type);
  
  console.log("como string: "+obj[prop]);
  console.log("como bool: "+!!obj[prop]);
  console.log("como numero: "+(+obj[prop]));
  
  if(type ==='object')
     log(obj[prop]);   
  
  //Object
  //Function : Object
  //Boolean : Object
  
}
  
}

log(objeto);