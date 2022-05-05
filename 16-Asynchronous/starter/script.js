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

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
