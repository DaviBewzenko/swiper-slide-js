'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');

    el.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => {
            el.innerHTML += letter;
        }, 55 * i);
    });
}

const mensagem = document.getElementById('mensagem');

// Chama a função typeWriter para exibir a mensagem
typeWriter(mensagem);

// Após 2 segundos, vá para a tela principal
setTimeout(() => {
    // Redirecionar para a tela principal ou fazer o que for necessário
    window.location.href = 'index.html'; // Substitua pelo URL da tela principal
}, 4000);

'use strict';

