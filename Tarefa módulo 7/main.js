// Pegando os elementos da página

const inputCampoA = document.getElementById('campo-a')
const inputCampoB = document.getElementById('campo-b')
const valido = document.getElementsByClassName('valido')[0]
const invalido = document.getElementsByClassName('invalido')[0]
const verificar = document.getElementById('verificar')

const form = document.querySelector('form')

// Impedindo a página de ser recarregada quando clicar no botão

form.addEventListener('submit', function(event) {
    event.preventDefault()
});

// Fazer a validação

verificar.addEventListener('click', function () {
    const campoA = parseInt(inputCampoA.value)
    const campoB = parseInt(inputCampoB.value)

    if (campoA === campoB || campoA > campoB) {
        invalido.style.display = 'block'
        valido.style.display = 'none'
    } else {
        valido.style.display = 'block'
        invalido.style.display = 'none'
    }

});
