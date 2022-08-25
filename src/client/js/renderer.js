const { ipcRenderer } =  require('electron');

var confirmar = document.querySelector('#buttonConfirmar');

function concluiValidacao(){
    confirmar.addEventListener('click', () =>{
        ipcRenderer.send('abrirJanelaValidação');
    });
}


module.exports = concluiValidacao