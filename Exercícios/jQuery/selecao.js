

//		Seleções


//1. Selecione todos os elementos DIV que têm a classe "module".
$('div.module')

//2. Obtenha o terceiro item na lista não-ordenada #myList.
$('#myList li:eq(2)');

//3. Selecione o label para o input de busca usando um seletor de atributo.
$('label[for="q"]');

//4. Encontre quantos elementos na página estão escondidos (dica: .length).
$(':hidden').length;

//5. Encontre quantos elementos na página têm um atributo alt.
$('img[alt]').length;

//6. Selecione todas as linhas ímpares no corpo da tabela.
$('#fruits tbody tr:odd');

//7. Selecione todos os elementos de imagem na página; logue o atributo alt de cada imagem.
$('img').each(function(i) {
	var $img = $(this);
	console.log($img.attr('alt'));
});

//8. Selecione a caixa de texto de busca, então vá para o form e adicione uma classe nele.
$('input[name="q"]').closest('form').addClass('foo');

//9. Selecione o item de lista dentro de #myList que possui uma classe "current" e remova esta classe dele; adicione uma classe "current" no próximo item de lista.
$('li.current')
	.removeClass('current')
	.next()
		.addClass('current');

//10. Selecione o elemento select dentro de #specials; se mova para o botão de submit.
$('#specials select').parent().next().find('input.input_submit');

//11. Selecione o primeiro item de lista no elemento #slideshow; adicione a classe "current" a ele e então adicione a classe "disabled" para seus elementos sibling.
$('#slideshow li:first')
	.addClass('current')
	.siblings()
		.addClass('disabled');



//		Manipulando
		
//1. Adicione cinco novos itens de lista no fim da lista não ordenada #myList. Dica:
var $ul = $('#myList');
for (i=0; i<5; i++) {
	var $li = $(document.createElement('li')).text(List item ' + i ).appendTo($ul)
}

//2. Remova os itens ímpares
$('#myList li:odd').remove();

//3. Adicione outro h2 e outro parágrafo à última div.module
$('div.module')
	.append('<h2>new heading</h2>')
	.append('<p>new paragraph</p>');


//4. Adicione outra opção para o elemento select; dê ao option o valor "Quarta-Feira".
$('select').append('<option value="wednesday">Wednesday</option>');

//5. Adicione uma nova div.module à página depois da última; coloque uma cópia de uma das imagens existentes dentro dela.
var $img = $('img:first');
var $newDiv = $('<div class="module"/>');

$newDiv.append($img.clone()).insertAfter('div.module:last');



