'use strict';

let body = document.querySelector('.body');

let main = document.querySelector('.main');

let stars = document.getElementById('stars');

let moon = document.getElementById('moon');

let mountainThree = document.getElementById('mountain-three');

let mountainFour = document.getElementById('mountain-four');

let rivers = document.getElementById('rivers');

let boot = document.getElementById('boot');

let nouvil = document.querySelector('.nouvil');

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 4 + 'px';
  mountainThree.style.top = value * 2 + 'px';
  mountainFour.style.top = value * 1.5 + 'px';
  rivers.style.top = value + 'px';
  boot.style.top = value + 'px';
  boot.style.left = value * 3 + 'px';
  nouvil.style.fontSize = value + 'px';
  if (value >= 60) {
    nouvil.style.fontSize = 60 + 'px';
    nouvil.style.position = 'fixed';

    if (value >= 173) {
      nouvil.style.display = 'none';
    } else {
      nouvil.style.display = 'block';
    }
    if (value >= 80) {
      main.style.background = 'linear-gradient(#282a42, #84bae4)';
    } else {
      main.style.background = 'linear-gradient(#200016, #10001f)';
    }
  }
};
