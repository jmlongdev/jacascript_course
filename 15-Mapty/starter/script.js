'use strict';
// https://leafletjs.com/reference.html
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    // this.date = ... //this is for ES6
    // this.id = ... // this is for ES6
    this.coords = coords; // [lat, lng]
    this.distance = distance; // km or miles
    this.duration = duration; // min
  }
}

//child classes of Workout

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elecationGain) {
    super(coords, distance, duration);
    this.elevationGain = elecationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    //km/hour
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run = new Running([39, -12], 5.2, 24, 170);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run, cycling1);

//////////////////////////////////
//APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this)); // the keyword points to the App object and not the form
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];
    console.log(this);
    this.#map = L.map('map').setView(coords, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    //Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    //helper functions for checking to see if inputs are numbers and positive
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // if workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers');
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    //add new object to the workout array
    this.#workouts.push(workout);
    console.log(workout);
    // Render workout on map as marker

    // render wokout on list

    // Hide form + clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    //Display Marker
    this.renderWorkoutMarker(workout);
    console.log(workout.distance);
  }
  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.distance}`)
      .openPopup();
  }
}

const app = new App();

//

//

//

//
//===========================================================================//
// ===== How to Plan a Web Project ===== // VIDEO 231
// ===== ** ONE OF THE MOST IMPORTANT SKILLS TO LEARN** ===== //

// PLANNING
// 1) USER STORIES:
//      Description of the application's functionality from the user's PERPECTIVE.   All user stories put together describe the entire application

// 2) FEATURES:
//

// 3) FLOWCHART: WHAT we will build
//

// 4) ARCHITECTURE:HOW we will build it
//

// AFTER PLANNING IS COMPLETE THE DEVELOPMENT STEP BEGINS: Implementation of our plan usng code.

/*                          USER STORIES
User story: Description of the application's functionality from the user's perspective 

Common Format: As a [type of user], I want [an action] so that [a benefit]
                        who                     what                why

a.  As a [user], I want [to log my running with location, distance, time, pace and   
    steps/minute], so that [I can keep a log of all my running]

b.  As a [user], I want [to log my cycling workouts with location, distance, time, 
    speed, and elevation], so that [I can keep a log of all my cycling]

c.  As a [user], I want [to see all my workouts at a glance], so [I can easily track 
    my progress over time] 

d.  As a [user], I want [to also see my workouts on a map], so [I can easily check 
    where I workout the most]

e.  As a [user], I want [see all my worhouts when I leave the app and come back
     later], so that I [can keep usng the app over time]

 */

/*                             FEATURES

a.  Map where user clicks to add new workout (best way to get location coordinates)
    Geolocation to display map location (more user friendly)
    Form to input distance, time, pacem and cadence

b.  Form to input distance, time, speed, elevation gain

c.  Display all workouts in a list

d.  Display all workouts on the map

e.  Store workout data in teh browser using local storae API 
    On page load, read the saved data from local storage and display
*/

/*                             FLOW CHART

look at included chart.

*/
/*                          ARCHITECTURE 





*/

/*                        Project Architecture 

*/
