'use strict';
// API URL CHANGE:https://restcountries.com/v3.1/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
const renderCountry = function (data) {
  const cur = Object.keys(data.currencies)[0];
  const lang = Object.keys(data.languages)[0];
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
};
const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
  });
};

getCountryAndNeighbor('portugal');
