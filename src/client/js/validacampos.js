const inputfile = document.getElementById('inputFile');
const textoErro = document.querySelector('.textoErro');
const confirmar = document.querySelector('#buttonConfirmar');


confirmar.addEventListener('click', () => {
    console.log(inputfile.files[0])
    if(!inputfile.value){
        textoErro.style.color = "red";
        textoErro.textContent = 'Campo obrigatório vazio!'
    }else{
        textoErro.textContent = 'Validação ok'
        textoErro.style.color = "green";
    }

    fetch('http://localhost:8080/iniciar')
})


