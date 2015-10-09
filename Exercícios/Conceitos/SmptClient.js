console.clear();

/*
Implemente a classe SmtpClient e o método Send

	-Este método recebe um objeto com as seguintes propriedades: [to], [from], [body], [subject].
	
	-Dentro do método, verifique a validade de cada uma dessas propriedades e retorne [true] ou [false]
	
	-Caso [to] ou [from] forem vazios ou e-mails inválidos, retorne [false] (“string”.indexOf(‘@’)>=0)
	
	-Se [body] e [subject] forem vazias, devem ser substituídas por “No Body” e “No Subject” respectivamente
	
	-Passe também um callback para logar a mensagem;
	
	-Se tudo estiver preenchido, invoque o callback passando a mensagem;

*/

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

