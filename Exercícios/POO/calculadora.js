console.clear();


//----------
//extensions
//-----------
(function(){
  
  String.prototype.toBinary=function(){
    return +this.toString(2);    
  };
  Number.prototype.toBinary=function(){
    return this.toString(2);    
  };
  
      
} )();




//----------
//lógica
//-----------

(function(ns){
  
  function Calculadora(name){
    var self = this;
    self.name = name;
    
    self.add = function(x,y){return x + y;};
    self.sub = function(x,y){return x - y;};
    self.multiply = function(x,y){return x * y;};
    self.divide = function(x,y){return x / y;};
    
    self.mod = function(x,y){return x % y;};
    
  } 
  
  
  function CalculadoraBinaria(){
    var self = this;
    self.bin = function(x,y){
      return self.add(x,y).toBinary();
    };
  }
  CalculadoraBinaria.prototype=new Calculadora('Binária');
    
  ns.Calculadora = Calculadora;
  ns.CalculadoraBinaria=CalculadoraBinaria;
  
}(window.NDDigital = Window.NDDigital || {})); //namespace





//----------
//eventos
//-----------
(function(){

$(function(){

var calc = new NDDigital.CalculadoraBinaria();

var $x = $('#x');
var $y = $('#y');
  
var $r = $('p');

$('button[name=add]').click(function(){
  
  var res = calc.add(+$x.val(),+$y.val());
  $r.text(res);
});

$('button[name=sub]').click(function(){  
  $r.text(calc.sub(+$x.val(),+$y.val()));
});
$('button[name=multiply]').click(function(){  
  $r.text(calc.multiply(+$x.val(),+$y.val()));
});
$('button[name=divide]').click(function(){  
  $r.text(calc.divide(+$x.val(),+$y.val()));
});
$('button[name=mod]').click(function(){  
  $r.text(calc.mod(+$x.val(),+$y.val()));
});
$('button[name=bin]').click(function(){  
  $r.text(calc.bin(+$x.val(),+$y.val()));
});
  
  
});

}())
