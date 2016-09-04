// интерактивная карта
ymaps.ready(function () {
//добавление карты в блок с идентификатором #map
var myMap = new ymaps.Map('map', {
  center: [59.939346,30.329256], //координаты центра карты
  zoom: 16 //масштаб
}, {
  searchControlProvider: 'yandex#search'
});
//запрет скроллинга при прокрутке страницы
myMap.behaviors.disable('scrollZoom');
//создание маркера;
var myPlacemark = new ymaps.Placemark ([59.938631,30.323055], {
    hintContent: 'Магазин Глейси'
}, {
     iconLayout: 'default#image',
     iconImageHref: 'img/pin.png', //иконка маркера
     iconImageSize: [218, 142], //размер маркера
     iconImageOffset: [-40, -142] //смещение маркера
}); 
  //добавление маркера на карту    
  myMap.geoObjects.add(myPlacemark);
});

// Модальное окно обартной связи
var openBtn = document.querySelector(".contact .button");
var overlay = document.querySelector(".overlay");
var feedback = document.querySelector(".feedback");
var closeBtn = feedback.querySelector(".close");
var form = feedback.querySelector("form");
var username = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var text = form.querySelector("textarea");
// окно не открывается в edge, вылетает ошибка, что в localStorage.getItem(..) пусто
// var usernameStrg = localStorage.getItem("username");
// var emailStrg = localStorage.getItem("email");

// открытие окна обратной связи
openBtn.addEventListener("click", function(event) { 
  event.preventDefault(); 
  feedback.classList.add("feedback-show");
  overlay.classList.add("overlay-show");
  // if (usernameStrg) {
  //   username.value = usernameStrg;
  //   if (emailStrg) {
  //     email.value = emailStrg;
  //     text.focus();
  //   } else {
  //     email.focus(); 
  //   } 
  // } else {
  //   username.focus();
  // }  
  username.focus();
});

// проверка заполнения обязательных полей
form.addEventListener("submit", function(event) {
  if (!username.value || !email.value) {
    event.preventDefault();
    feedback.classList.remove("error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("error");
  } 
  // else {
  //   localStorage.setItem("username", username.value);
  //   localStorage.setItem("email", email.value);
  // }
});

// закрытие формы на крестик
closeBtn.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("feedback-show");
  feedback.classList.remove("error");
  overlay.classList.remove("overlay-show");
});

// закрытие формы по нажатию на ESC
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback.classList.contains("feedback-show")) {
      feedback.classList.remove("feedback-show");
      feedback.classList.remove("error");
      overlay.classList.remove("overlay-show");
    }
  }
});
// закрытие формы по клику вне формы
overlay.addEventListener("click", function() {
  feedback.classList.remove("feedback-show");
  feedback.classList.remove("error");
  overlay.classList.remove("overlay-show");
});