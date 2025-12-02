// assets/js/main.js - small helpers
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }
});
