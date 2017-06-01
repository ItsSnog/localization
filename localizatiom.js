//detect language.
//if lang was saved in local storage, get it form there
//else check all radio-buttons.
//if checked get lang
//else set defaultLang ua
var getCurrentLanguage = function () {
 var inputs = document.getElementsByName('lang');//get all inputs(radio)
 if (localStorage.length !== 0) {
   defaultLanguage = localStorage.getItem("currentLang");
 } else {
   var defaultLanguage = 'ua';
 }
 //if radio checked then get value from parentNode(label)
 inputs.forEach(function (input) {
   if (input.checked) {
     defaultLanguage = input.parentNode.textContent.trim().toLowerCase();
   }
 });
 return defaultLanguage;
}
var currentLang = getCurrentLanguage();
var inputs = document.getElementsByName('lang');//get all inputs(radio)
//apply listener for everu radio-button
inputs[2].addEventListener('click', function () {
 applyLang();
});
inputs[1].addEventListener('click', function () {
 applyLang();
});
inputs[0].addEventListener('click', function () {
 applyLang();
});
applyLang();
var $save = document.querySelector('html body button#save')
//save currentlang in localSorage via click on the button
$save.addEventListener('click', function(){
 localStorage.setItem("currentLang", getCurrentLanguage());
// offVisible(getCurrentLanguage());
  alert('lang-' + currentLang);
});
//check the classes that were not choosen and off their class visible
function offVisible(currentLang) {
 var off = Array.from(document.getElementsByClassName('lang'));
 for (var i = 0; i < off.length; i++) {
   if (!off[i].classList.contains("lang-"+currentLang)) {
     if (off[i].classList.contains('visible')) {
       off[i].classList.remove('visible');
     }
   }
 }
}
//apply lang that was choosen via radio button
function applyLang() {
 currentLang = getCurrentLanguage();
 var langEls = document.getElementsByClassName('lang-' + currentLang);
 
 for (var i=0; i<langEls.length; i++) {
   var langEl = langEls[i];
   langEl.classList.add('visible');
 }
 offVisible(currentLang);
}
