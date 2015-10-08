console.clear();

function resolver(acc,rej){
  
  setTimeout(function(){
  
  var valid = true;
  var data= {
    statusCode:200,
    statusText:'Ok!',
    data:"martelo"
  };
  
  if(valid){
    acc(data);
  }
  else{
    var error = new Error("deu ruim");
    rej(error);
  }
    },2000);
  
}
var promise = new Promise(resolver);

promise
   .then(function(result){
     
     console.warn(result.statusCode);
     return result.data;
})
   .then(function(data){
     console.log(data);
     return data +" vermelho";
})
   .then(function(data){
     console.log(data);
     return data +" do guerreiro";
})
   .then(function(data){
     console.log(data);
     return data +" de fogo";
})
   .then(function(data){
     console.log(data);
});