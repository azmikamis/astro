'use strict';

document.addEventListener('DOMContentLoaded', function() {
  var navbtn = document.getElementById('nav-btn')
  var navwrapper = document.getElementById('nav-wrapper')
  function navbtnClick() {
      navbtn.classList.toggle('open');
      navwrapper.classList.toggle('open');
  }
  navbtn.addEventListener('click', navbtnClick);
});