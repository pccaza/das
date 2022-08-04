import css from './styles/style.css';

let slideIndex = 1;
const slides = document.querySelectorAll('.image-slide');

function displaySlide(n) {
  const radioBtn = document.querySelectorAll('.radio-btn');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < radioBtn.length; i += 1) {
    radioBtn[i].textContent = radioBtn[i].textContent.replace(
      'radio_button_checked',
      'radio_button_unchecked'
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
    navBtn.addEventListener('click', (e) => {
      displaySlide((slideIndex = index + 1));
    });
    radioBtnNavContainer.appendChild(navBtn);
  });
}

createNavBtn(slides);

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

function render() {
  displaySlide(slideIndex);
  changeSlide();
}

render();

/* <span class="material-symbols-outlined">
            radio_button_unchecked
</span> */
