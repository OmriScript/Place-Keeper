'use strict';

const KEY = 'userData';

let gUserData;

function _saveUserData() {
  saveToStorage(KEY, gUserData);
}

function loadUserData() {
  let userData = loadFromStorage(KEY);
  if (userData) {
    setColors(userData.bgColor, userData.textColor);
    setAstMsg(userData.birthday, userData.birthTime);
  }
}

function setUserData(bgColor, textColor, birthday, birthTime, email) {
  let data = {
    bgColor,
    textColor,
    birthday,
    birthTime,
    email,
  };
  gUserData = data;
  _saveUserData();
  console.log('gUserData', gUserData);
}
