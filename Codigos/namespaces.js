console.clear();


//file 1
var f =(function(ns){
  
  var version='1.0';
  var date=+new Date();
  
  function printAppInfo(){
    return version+" "+date;
  }
  
  ns.appInfo = printAppInfo;
  

})(NDDigial = window.NDDigial || {});


//file 2
var f =(function(ns){
  
  var version='1.0';
  var date=+new Date();
  
  function printAppInfo(){
    return version+" "+date;
  }
  
  ns.appInfo2 = printAppInfo;
  
  var t=2;
  
  return t = 5
  

})(NDDigial = window.NDDigial || {});



console.log(f);
console.log(NDDigial.appInfo2());

