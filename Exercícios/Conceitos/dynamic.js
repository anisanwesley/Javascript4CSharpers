/*
Fa�a um montador de objetos din�micos

	-o usu�rio informa por inputs a chave e o valor de cada propriedade
	
	-que por sua vez � listada abaixo via reflection
*/

console.clear();
//script para chamar o jQuery sem precisar de refer�ncia da lib no html, apenas este script referenciado
var script=document.createElement('script');script.onload=activate;script.src="https://code.jquery.com/jquery-2.1.4.js";document.querySelector('head').appendChild(script);

function activate(){
    
var object ={};
  
//cria��o de elementos
var $body = $('body');
  
var $inputProp =  $('<input>',{
    placeholder:'Propriedade',
});
var $inputValue =  $('<input>',{
    placeholder:'Valor',
});
var $button =  $('<button>',{
    text:'Gerar',
});
  
//setando eventos
$button.click(function(){
  
  var prop = $inputProp.val();
  var value= $inputValue.val();
  
  object[prop] = value;
  console.log(object);
  
  $body.append($p = $(document.createElement('p'))
              .text(prop+ " : "+value));
  
  
}); 
  
//renderizando
  var appends = [
    $inputProp,
    $inputValue,
    $button
  ];  
  $body.append(appends);
  $body.append($('<h1>'));
  
}