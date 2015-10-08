console.clear();

var c = new Client();

var callback = function(texto){
  console.log(texto);
};

c.send({
  to:'@',
  from:"@",
  subject:''
},callback);




function Client(){
  this.send = function(msg, cb){
    
    if(!msg.to || !msg.from) return false;
    
    if(msg.to.indexOf('@')<0 || msg.from.indexOf('@')<0 ) return false;
    
    var defaults = {
      body:'No Content',
      subject:'No Subject',
    };
    
    extend(msg,defaults);
    
    cb(msg);
  };
}

function extend(objA, objB){
  
  for(var prop in objB){
    objA[prop] = objA[prop] || objB[prop];
  }
  
}

