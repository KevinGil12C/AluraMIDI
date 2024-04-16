function play_sonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista_teclas = document.querySelectorAll('.tecla');

for (let i = 0; i < lista_teclas.length; i++) {
    const tecla = lista_teclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    tecla.onclick = function () {
        play_sonido(idAudio);
    };

    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    };
    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    }

}