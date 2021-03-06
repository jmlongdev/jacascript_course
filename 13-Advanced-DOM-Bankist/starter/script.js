'use strict';
// Ideas to improve website
// add transition for nav bar to smoothly come in
// if the Features button is clicked then the nav bar should stay
// on page refresh bring back to top of page
// add back to top button in each section

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const allSections = document.querySelectorAll('.section');
const imageTargets = document.querySelectorAll('img[data-src]');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////
//Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // modern way - only works in modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////////////
//// Page Navigation
/*
***** DOESN'T SCALE WELL *****
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

// Event Delegation
// 1. Add Event listener to common parent element
// 2. Detemine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////////////////////////
////        Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //.closest SUPER IMPORTANT

  // Gaurd Clause - returns early if some condition is matched
  if (!clicked) return;

  // Remove active classes to make them disappear
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate Tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////////////////////////////////////////////
//// Menu fade animation

const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing an 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
nav.addEventListener('mouseout', handleHover.bind(1));
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

///////////////////////////
/// Sticky Navigation
// this implementation is not the most effective
/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/
/*
/// Sticky navigation pt2: Intersection Observer API
// the callback function and options can be defined inside the new intersection observer but its a bit cleaner to define them outside and then use a variable name in the parenths

const observerCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const observerOptions = {
  root: null,
  //[0, 0.2] the zero triggers the callback funciton when it leaves the view and .2
  // triggers the callback funciton when it enters the view at 20%
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(section1);
*/
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//////////////////////////////////////////////////////////////////
// Revealing Elements on Scroll

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  //Gaurd Clause
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//////////////////////////////////////////////////////////
/// Lazy Loading Images

// console.log(imageTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace the src with data-src
  entry.target.src = entry.target.dataset.src;
  // Using this will remove the lazy-img effect before the image has a chance to load. // entry.target.classList.remove('lazy-img');
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.3,
  rootMargin: '300px',
});
imageTargets.forEach(image => imgObserver.observe(image));

/////////////////////////////////////////////////////////
//// Building a SLider Component

// Slider
const sliders = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const slider = document.querySelector('.slider');
  let currentSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector('.dots');

  // ----USED FOR TESTING---- //
  // slider.style.transform = 'scale(0.3) translateX(-1500px)';
  // slider.style.overflow = 'visible';

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, index) =>
        (s.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };

  init();
  //Event Handlers
  btnRight.addEventListener('click', nextSlide); // Next slide
  btnLeft.addEventListener('click', prevSlide); // Previous SLide
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliders();
//================================================================================
/*

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///// How the DOM Really Works

 Review: what is the DOM?
The DOM:
    Allows us to make JavaScript interact with the browser

    We can write JAvaScript to create modify and delete HTML elements; set styles, classes and attributes; and listen and respond events

    DOM tree is generated from an HTML document, which we can then interact with 

    DOM is a very complex API that contains lots of method and properties to interact with the DOM tree

*/

//=============================================================================

/*
///////////////////////////////////////////////////////
/// Selecting, Creating and Deleting Elements
///

/// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

/// more modern selectors
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

/// have a place if you need a collection
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

/////// Creating and inserting elements /////

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics'
message.innerHTML =
  'We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">Got it!</button';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

/////////  Delete Elements  ///////////

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // the original way to remove elements
    // message.parentElement.removeChild(message);
  });
*/

//======================================================================

/*
/////////////////////////////////////////////////
/// Styles, Attributes, and Classes
///

///// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//setting custom properties . in the root in css
document.documentElement.style.setProperty('--color-primary', 'orangered');

/// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
// use these. more dynamic
logo.classList.add('c','j')
logo.classList.remove('c','j')
logo.classList.toggle('c')
logo.classList.contains('c') //not includes

// Dont use, will override all existing classes and only be able to put one class
logo.className = 'Max'

*/

//=============================================================================

/*
/////////////////////////////////////////////////////
///// Implementing Smooth Scrolling

// old school way - works in every browser. would be best to know

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // to implement a smooth scroll need to create an object with left, top, and bahavior properties
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // modern way - only works in modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});
*/

//==========================================================================

/*
////////////////////////////////////////////////
///// Types of Events and Event Handlers

const alertH1 = function (e) {
  alert('AddEventListener: Great! you are reading the heading!');

  // h1.removeEventListener('mouseenter', alertH1);
};

const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//more old school
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! you are reading the heading!');
// };

*/

//==========================================================================

//////////////////////////////////////////////
///// Event Propagation: Bubbling and Capturing

//==========================================================================

/*
//////////////////////////////////////////////
///// Event Propagation in Practice
////

// rgb(255,255,255)

// formula to generate a random Int.
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propogation - not best practice
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);

*/
//===============================================================================

/////////////////////////////////////////////////////////
//// Event Delegation: Implementing Page Navigation
////

/*
/////////////////////////////////////////////////////////
//// DOM Traversing
////
////
const h1 = document.querySelector('h1');

// Going downwards: child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);


// VERY IMPORTANT AND WILL BE USED ALOT
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';



// Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// get all the siblings at once

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(.5)';
});
*/
/////////////////////////////////////////////////////
/////Building a Tabbed Component

/////////////////////////////////////////////////////
///// Passing Arguments to Event Handlers

////////////////////////////////////////////////////
/// Lifecycle DOM Events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

/*
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
*/
