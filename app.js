
let phone = document.querySelector('.phone');
let arr1 = document.querySelector('.phone .arr');
// let arr2 = document.querySelector('.product-item .arr');
let tel = document.querySelector('.phone p');
let realPhones = document.querySelector('.phone .real-phones');
let productItems = document.querySelectorAll('.product-item');

// стрелка на телефон
phone.addEventListener('click', function () {
  arr1.classList.toggle('rotate');
  tel.classList.toggle('hiden');
  realPhones.classList.toggle('hiden');
})

// console.log(productItems)


// product-item

productItems.forEach(element => {
  element.addEventListener('mouseover', function () {
    element.querySelector('.arr').classList.add('rotate');
    element.querySelector('.add-list').classList.remove('hiden');
  })
  element.addEventListener('mouseleave', function () {
    element.querySelector('.arr').classList.remove('rotate');
    element.querySelector('.add-list').classList.add('hiden');

  })
});
// /header 
//==========

//new
//===========

const now = document.querySelector('.now');
const all = document.querySelector('.all');
const bgs = document.querySelector('.bgs');
const imgs = document.querySelectorAll('.bg-img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const nameu = document.querySelector('.new__inner__control-name');
const discription = document.querySelector('.new__inner__control-discription');

all.textContent = '0' + imgs.length;

let r = 1;
show()
prev.addEventListener('click', () => {
  if (r == 1) {
    r == 1;
  } else {
    r -= 1;
  }
  show()
})
next.addEventListener('click', () => {
  if (r == imgs.length) {
    r == imgs.length;
  } else {
    r += 1;
  }
  show()
})

function show() {
  now.textContent = '0' + r;
  for (i = 0; i < imgs.length; i++) {
    imgs[i].classList.add('hiden');
    imgs[i].setAttribute('data-num', `${i + 1}`);
  }
  for (it of imgs) {
    if (it.getAttribute('data-num') == r) {
      it.classList.remove('hiden')
      nameu.textContent = it.getAttribute('data-name');
      discription.textContent = it.getAttribute('data-discription');
    }
  }
}
//new end
//===========

//preference
//==========
const treck = document.querySelector('.treck');
const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderItemCount = document.querySelectorAll('.slider-item').length;
const sliderItem = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.btn-slider-prev');
const btnNext = document.querySelector('.btn-slider-next');
let offset = 0;

for (let item of sliderItems) {
  item.style.width = slider.clientWidth * 0.319 + 'px';
}
if (window.innerWidth < 800) {
  for (let item of sliderItems) {
    item.style.width = slider.clientWidth + 'px';
  }
}

let fff = sliderItem.clientWidth * 3 + (30 * 3) - 1;

block()

btnPrev.addEventListener('click', () => {
  offset += sliderItem.clientWidth + 30;
  fff += offset;
  block()
  treck.style.marginLeft = offset + 'px';
})


btnNext.addEventListener('click', () => {
  offset -= sliderItem.clientWidth + 30;
  fff += -offset;
  block()
  treck.style.marginLeft = offset + 'px';
})

function block() {
  if (offset >= 0) {
    offset = 0;
  }
  if (offset <= -((sliderItem.clientWidth + 30) * (sliderItemCount - 3))) {
    offset = -((sliderItem.clientWidth + 30) * (sliderItemCount - 3));
  }
}
//preference end
//==========

const navIcon = document.querySelector('.small-nav-icon');
const smallMainNav = document.querySelector('.small-nav');

navIcon.addEventListener('click', () => {
  smallMainNav.classList.toggle('hidden');
})