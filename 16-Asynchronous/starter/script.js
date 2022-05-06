'use strict';
// API URL CHANGE:https://restcountries.com/v3.1/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  // const cur = Object.keys(data.currencies)[0];
  const currencies = Object.values(data.currencies);
  // console.log(cur);
  // const lang = Object.keys(data.languages)[0];
  const languages = Object.values(data.languages);
  // console.log(lang);
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} mil people</p>
    <p class="country__row"><span>🗣️</span>${languages[0]}</p>
    <p class="country__row"><span>💰</span>${currencies[0].name}</p>
    </div>`;
  // console.log(html);
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    let cur = Object.keys(data.currencies)[0];
    let lang = Object.keys(data.languages)[0];
    const html = `<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}mil people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
    <p class="country__row"><span>💰</span>${data.currencies[cur].name}</p>
  </div>`;
    // console.log(html);
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
// getCountryData('usa');
// getCountryData('spain');
// getCountryData('canada');
// getCountryData('germany');
*/
// const renderCountry = function (data, className = '') {
//   const cur = Object.keys(data.currencies)[0];
//   const lang = Object.keys(data.languages)[0];
//   const html = `<article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//   <h3 class="country__name">${data.name.common}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )} mil people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[cur].name}</p>
//     </div>`;
//   // console.log(html);
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

/*
  const getCountryAndNeighbor = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render Country 1
    renderCountry(data);
    //Get neighbor country 2
    const neighbor = data.borders?.[0];
    if (!neighbor) return;
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbor');
    });
  });
};

// getCountryAndNeighbor('portugal');
getCountryAndNeighbor('usa');

//small example of callback hell
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/
//================================================================================//

// Promises and Fetch API

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     let cur = Object.keys(data.currencies)[0];
//     let lang = Object.keys(data.languages)[0];
//     const html = `<article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}mil people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[lang]}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[cur].name}</p>
//   </div>`;
//     // console.log(html);
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

//================================================================================
//Consuming a promise

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
//   console.log(request);
// };

// Chaining Promises

// const getCountryData = function (country) {
//   //coutry 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => { if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders?.[0];
//       const neighbor = 'jkhgjkh';
//       if (!neighbor) return;
//       //country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(([data]) => {
//       // destructuring data2 made it work. idk how
//       renderCountry(data, 'neighbor');
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   //country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) throw new Error('No neighbor found!');
//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbor}`,
//         'Country not found'
//       );
//     })
//     // destructuring data2 made it work. idk how
//     .then(([data]) => renderCountry(data, 'neighbor'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('australia');

//==============================================================================

// ===== Coding Challenge 1 ===== //
/*
const whereAmI = function (lat, lng, errorMsg = 'Something went wrong') {
  const request = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      console.log(data);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message}💥`);
      renderError(`Something went wrong 💥 ${err.message}. Try again! `);
    });
};
*/
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//===============================================================

// ===== Asynchronous Behind the Scenes: The Event Loop ===== //

// ===============================================================

// ===== The Event Loop in practice ===== //
/*
console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolves Promise 2').then(res => {
  for (let i = 0; i < 10000; i++) {}
  console.log(res);
});
console.log('Test End');
*/

//===========================================================================

// ===== Building a Simple Promise ===== //

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win😎');
//     } else {
//       reject(new Error('You Lose 😒'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
/*
// Promisifying setTimeout
const wait = seconds =>
  (seconds = new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  }));

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds ');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));

*/

// console.log('Getting position');

// const getPosition = function () {
//   return new Promise((resolve, reject) =>
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // )
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   );
// };

// getPosition().then(pos => console.log(pos));
/*
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok) throw new Error(` (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      console.log(data);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message}💥`);
      renderError(`Something went wrong 💥 ${err.message}. Try again! `);
    });
};

btn.addEventListener('click', whereAmI);

*/

// =============================================================================
/*
// ===== challenge 2 ===== //
const wait = seconds =>
  (seconds = new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  }));

const imagesContainer = document.querySelector('.images');

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imagesContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image Not Found'));
    });
  });
};

let currentImg;
// consume the promise and add a catch to handle the error
createImg('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImg('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImg('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 3 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/
//==========================================================

// ===== ASYNC and AWAIT ===== //
// is syntatic sugar over the .then method
/*
const getPosition = function () {
  return new Promise((resolve, reject) =>
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // )
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // country data
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error('Problem getting country');
    const data = await response.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.state}`;
  } catch (err) {
    console.error(`${err}🤣`);
    renderError(`🤣 ${err.message}`);

    // Reject Promise returned from async function
    throw err;
  }
};
// const city = whereAmI();
// console.log(city);
//
// mixed with promises
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}💥`))
//   .finally(() => console.log('3. Finished getting location'));

// try catch is better with async await
console.log('1. Will get location');
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}💥`);
  }
  console.log('3. Finished getting location');
})();

// whereAmI();
// whereAmI();
*/
//===================================================================================

// ===== Running Promises in Parallel ===== //

// Encapsulates the fetch request and error handling
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
/*
// with an async function ALWAYS wrap with a try catch
const getThreecountries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(data => data[0].capital));
  } catch (err) {
    console.error(err);
  }
};

getThreecountries('portugal', 'canada', 'tanzania');
*/
//==============================================================================

//===== Other Promise Combinators: race, allSettled and any =====//

//promise.race
// short circuits when one promise is fulfilled resolve or reject
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  // console.log(res[0]);
})();
/*
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/argentina`),
  timeout(0.12),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//promise.allSettled

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//promise.any ES2021

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
  */
//
//
//
//===================================================================================

// ===== Challenge 3 ===== //

const wait = seconds =>
  (seconds = new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  }));

const imagesContainer = document.querySelector('.images');

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imagesContainer.append(img);
      // img.classList.add('parallel');
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image Not Found'));
    });
  });
};

//Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImg(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// part 1
const loadNPause = async function () {
  try {
    // Load image one
    let img = await createImg('img/img-1.jpg');
    console.log('Image 1 Loaded');
    await wait(2);
    img.style.display = 'none';
    // Load image 2
    img = await createImg('img/img-2.jpg');
    console.log('Image 2 Loaded');
    await wait(2);
    img.style.display = 'none';

    // Load Image 3
    img = await createImg('img/img-3.jpg');
    console.log('Image 3 Loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();
