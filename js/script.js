/* pegar o elemento da imagem do html, para adcionar uma classe */
const kirby = document.querySelector('.kirby');
const tubo = document.querySelector('.tubo');

const pulo = () =>{
    kirby.classList.add('pulo');

    setTimeout(() =>{
        kirby.classList.remove('pulo');
    },550);
}

const loop = setInterval(() =>{

    console.log('loop');

    const tuboPosition = tubo.offsetLeft;
    const kirbyPosition = +window.getComputedStyle(kirby).bottom.replace('px','');

    console.log(kirbyPosition);

    if(tuboPosition <= 110 && tuboPosition >0 && kirbyPosition < 85) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        kirby.style.animation = 'none';
        kirby.style.bottom = `${kirbyPosition}px`;

        kirby.src ='./image/kirbySad.png';
        kirby.style.width = "65px"
        kirby.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);




/* ao clicar em qualquer tecla, chama a função pulo */
document.addEventListener('keydown', pulo);
