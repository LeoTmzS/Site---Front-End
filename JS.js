const mario = document.querySelector('.mario'); /* Define o mario  */
const pipe = document.querySelector('.pipe'); /* Defino o cano (pipe) */

const jump = () => { /* Faz com que de para pular varias vezes com o mario */
    
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => { /* Tira o texto do console para leitura (Usado na condicional) */

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');    

    console.log(marioPosition);
    
    if (pipePosition < 100 && marioPosition < 70) { /* Condicional que verifica as posições do cano e mario para definir quando é game over  */

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./over.png"
        
        clearInterval(loop);

    }



}, 10)
 
document.addEventListener("click", jump); /* Click para pular, responsivo para mobile  */