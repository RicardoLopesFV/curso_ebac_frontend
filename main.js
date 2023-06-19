
$('form').submit(function(e){
    e.preventDefault()

    const inputTarefa = $('#input-tarefa').val()
    const novaTarefa = $(`<li>${inputTarefa}</li>`)
    $(novaTarefa).appendTo('ul')

    $('#input-tarefa').val('')
    $('li').click(function(){
        $(this).css('text-decoration', 'line-through')
    })
})

// com esse exercício caiu a ficha sobre como usar o 'this'.
