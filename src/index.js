import './styles/style.css';
import jpg1 from './assets/1.jpg';
import jpg2 from './assets/2.jpg';
import jpg3 from './assets/3.jpg';
import jpg4 from './assets/4.jpg';

const slides = document.querySelectorAll('.image-slide');
let slideIndex = 1;

function displaySlide(index) {
  const radioBtn = document.querySelectorAll('.radio-btn');

  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < radioBtn.length; i += 1) {
    radioBtn[i].textContent = radioBtn[i].textContent.replace(
      'radio_button_checked',
      'radio_button_unchecked',
    );
  }
  slides[slideIndex - 1].style.display = 'flex';
  radioBtn[slideIndex - 1].textContent = 'radio_button_checked';
}

function createNavBtn(number) {
  const radioBtnNavContainer = document.querySelector('.radio-btn-nav');
  number.forEach((el, index) => {
    const navBtn = document.createElement('span');
    navBtn.classList.add('material-symbols-outlined');
    navBtn.classList.add('radio-btn');
    navBtn.textContent = 'radio_button_unchecked';
    navBtn.dataset.index = index;
    navBtn.addEventListener('click', () => {
      displaySlide((slideIndex = index + 1));
    });
    radioBtnNavContainer.appendChild(navBtn);
  });
}

function changeSlide() {
  const slideRight = document.querySelector('.right-control');
  const slideLeft = document.querySelector('.left-control');

  slideRight.addEventListener('click', () => {
    displaySlide((slideIndex += 1));
  });

  slideLeft.addEventListener('click', () => {
    displaySlide((slideIndex -= 1));
  });
}

function addImg() {
  const imgArr = [];
  const containerList = Array.prototype.slice.call(slides);
  const imgOne = new Image();
  imgOne.src = jpg1;
  const imgTwo = new Image();
  imgTwo.src = jpg2;
  const imgThree = new Image();
  imgThree.src = jpg3;
  const imgFour = new Image();
  imgFour.src = jpg4;
  imgArr.push(imgOne, imgTwo, imgThree, imgFour);
  imgArr.forEach((e, index) => {
    containerList[index].appendChild(e);
  });
}

function render() {
  createNavBtn(slides);
  displaySlide(slideIndex);
  changeSlide();
  addImg();
}

render();
