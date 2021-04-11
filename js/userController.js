'use strict';

function init() {
  console.log('init');
  loadUserData();
}

function onSumbit(ev) {
  ev.preventDefault();
  let bgColor = document.querySelector('[name=bg-color]').value;
  let textColor = document.querySelector('[name=text-color]').value;
  let birthday = document.querySelector('[name=date]').value;
  let birthTime = document.querySelector('[name=birth-time]').value;
  let email = document.querySelector('[name=email]').value;

  setColors(bgColor, textColor);
  setAstMsg(birthday, birthTime);
  setUserData(bgColor, textColor, birthday, birthTime, email);
}

function setColors(bgColor, textColor) {
  let elBody = document.querySelector('body');
  elBody.style.backgroundColor = bgColor;
  elBody.style.color = textColor;
}

function setAstMsg(birthday) {
  let forecasts = [
    'You will win at the lottery this year.',
    'Life begins to feel more stable and directed, and your increased self-awareness puts you in a better decision-making position.',
    'People are interested in your ideas and perspectives this year. You’re finding your voice!',
  ];
  let month = parseInt(birthday.slice(5, 7));
  let randomIdx;
  if (month < 4) {
    randomIdx = 0;
  } else if (month < 8) {
    randomIdx = 1;
  } else {
    randomIdx = 2;
  }
  let elForecast = document.querySelector('.forecast');
  elForecast.innerHTML = forecasts[randomIdx];
}

function showAge(newVal) {
  document.getElementById('sAge').innerHTML = newVal;
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
