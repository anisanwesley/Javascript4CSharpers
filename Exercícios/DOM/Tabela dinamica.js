/*
Monte uma tabela com as tabuadas do 1 ao 10 puramente com javascript


 1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9 | 10
------------------------------------------------
 2 |  4 |  6 |  8 | 10 | 12 | 14 | 16 | 18 | 20
 3 |  6 |  9 | 12 | 15 | 18 | 21 | 24 | 27 | 30
 4 |  8 | 12 |    |    |    |    |    |    | 
 5 | 10 | 15 |    |    |    |    |    |    | 
 6 | 12 | 18 |    |    |    |    |    |    | 
 7 | 14 | 21 |    |    |    |    |    |    | 
 8 | 16 | 24 |    |    |    |    |    |    | 
 9 | 18 | 27 |    |    |    |    |    |    | 
10 | 20 | 30 |    |    |    |    |    |    | 
  

*/
console.clear();
var criaTabuada = function(){
    var nrLinhas = 10,
        nrColunas = 10,
        elConteudoPrincipal = document.querySelector("body"),
        tabela = null,
        tr = null,
        td = null,//esta variável conterá, hora tds, hora ths (quando na linha ou coluna zero)
        strTipoCelula = "";//conterá o tipo de tag a ser criada pelo createElement
    //remove possíveis elementos que estejam no conteudo principal
    tabela = document.createElement("table");
    tabela.id = "tabelaExemplo";
    //para cada linha
    for (var i = 0; i < nrLinhas; i += 1){
        //cria uma linha
        tr = document.createElement("tr");
        tr.id = "linha_" + i;
        //anexa a linha recem criada ao elemento tabela
        tabela.appendChild(tr);
        //para cada coluna
        for (j = 0; j < nrColunas; j += 1){
            //define se vai criar uma td ou uma th
            if (i === 0 || j === 0){
              strTipoCelula = "th";
            }else{
              strTipoCelula = "td";
            }
            td = document.createElement(strTipoCelula);
            td.id = "linha_" + i + "_coluna_" + j;
            //cria e anexa um textNode à celula
            td.appendChild(document.createTextNode(((i+1) * (j+1))));
            //usa a propriedade title para demonstrar a operação
            td.title = i+1  + " x " + (j+1) + " = " + (i+1) * (j+1);
            //anexa a celula à linha
            tr.appendChild(td);
        }
    }
    //finalmente, com a tabela completa,
    //anexa a tabela ao conteúdo principal
    elConteudoPrincipal.appendChild(tabela);
};
criaTabuada();
