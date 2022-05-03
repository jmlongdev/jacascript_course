'use strict';
// https://leafletjs.com/reference.html
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 13);
      //   console.log(map);
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapEvent) {
        const { lat, lng } = mapEvent.latlng;

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .openPopup()
          .setPopupContent('Workout');
      });
    },
    function () {
      alert('Could not get your position');
    }
  );

// EVENT HANDLERS

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
