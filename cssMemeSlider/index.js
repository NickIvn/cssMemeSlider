const imagesContainer = document.querySelector('.slider');
const controls = document.querySelectorAll('.control-bg');
const outerButtons = document.querySelectorAll('.control-outer');
const innerButtons = document.querySelectorAll('.control-inner');
const image = document.querySelector('.meme');
const memeContainer = document.querySelector('.meme-container');
const texts = document.querySelectorAll('.meme-text');

let currentIndex = 0;
let slideWidth;


function updateSlide() {
    imagesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    innerButtons.forEach((innerButton, index) => {
        if(index === currentIndex) {
            innerButton.style.backgroundColor = 'rgb(59, 59, 59)';
        } else {
            innerButton.style.backgroundColor = '';
        }
        texts.forEach((text, index) => {
            if(index === currentIndex) {
                text.style.display = 'flex';
                text.classList.add('appearance');
            } else {
                text.classList.remove('appearance');
                text.classList.add('desappearance');
                text.style.display = 'none';
            }
        })
    })
}

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        console.log('click');
        currentIndex = index;
        updateSlide();
    })
});

function updateSlideWidth() {
    const imageWidth = image.width;
    if(window.innerWidth <= 1420) {
    // console.log(imageWidth);
            slideWidth = imageWidth + 30;
    } else {
        slideWidth = imageWidth + 30;
    }
            updateSlide();
        }
        
updateSlideWidth();
window.addEventListener('resize', updateSlideWidth);