/*

1. Adicione um evento no onChange do campo de pesquisa para alterar o conte�do do bot�o abaixo para �Go to: <termo>�

2. Crie um bind do evento click no item de lista que:

	- Adicione uma classe "current" para o item de lista clicado.
	
	- Remova a classe "current" do outro item de lista.

*/


var $q = $('input[name=q]').change(function(){
	$('input[type=submit]')
		.val($q.val())
	});

var $lis = $('#myList>li').on('mouseover',function(){
	$lis.removeClass('current');
	$(this).addClass('current')
	});