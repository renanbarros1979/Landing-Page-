const accordion = document.querySelectorAll('.accordion');

accordion.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})


//cria as variaveis pra funcções, recebendo os ids e class do html
const slider = document.querySelectorAll('.slide'); 
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

//deixa o slide atual sempre em 0
let currentSlide = 0;

//sempre que for esconder um slide, retira a palavra 'on'
function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

//sempre que for mostrar um slide, acrescenta a palavra 'on'
function showSlider () {
    slider[currentSlide].classList.add('on')
}

// Avança para o próximo slide
function nextSlider() {
    hideSlider()
    // Se já estiver no último slide, volta para o primeiro
    if(currentSlide == slider.length -1){
        currentSlide = 0
    } else {
    // Caso contrário, avança para o próximo
        currentSlide++
    }
    showSlider()
}

// Volta para o slide anterior
function prevSlider() {
    hideSlider()
    // Se estiver no primeiro slide, vai para o último
    if(currentSlide == 0){
        currentSlide = slider.length -1
    } else {
        // Caso contrário, volta um slide
        currentSlide--
    }
    showSlider()
}

// Adiciona um ouvinte de evento para o botão de "próximo", que chama a função nextSlider ao ser clicado
btnNext.addEventListener('click', nextSlider)

// Adiciona um ouvinte de evento para o botão de "anterior", que chama a função prevSlider ao ser clicado
btnPrev.addEventListener('click', prevSlider)

// Exibe no console a lista de slides encontrados no HTML
console.log(slider)