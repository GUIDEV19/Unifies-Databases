const inputfile = document.getElementById('inputFile');
const textoErro = document.querySelector('.textoErro');
const confirmar = document.querySelector('#buttonConfirmar');
const data = document.getElementById('inputDate')



confirmar.addEventListener('click', () => {
    async function validation() {
        if(!inputfile.value){
            textoErro.style.color = "red";
            textoErro.textContent = 'Campo obrigatório vazio!'
        }else{
            
            textoErro.textContent = 'Validação ok'
            textoErro.style.color = "green";
            console.log(data.value)
            var body = {
                caminho:  inputfile.files[0].path,
                data: data.value
            } 
            console.log(body)

            const init = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(body)
                
            }

            const response = await fetch(`http://localhost:8080/iniciar`, init)
            const dados = await response.json()
            console.log(dados)
        }
    }

    validation()
})

