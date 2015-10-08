console.clear();

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