//  Phần Thư Viện
$(document).ready(function () {
  $(".header__slider").slick({
    autoplay: true,
  });
});
AOS.init();
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("menu")[0].style.padding = "6px 0px ";
    document.getElementById("nav-bar").style.padding = "12px 16px ";
  } else {
    document.getElementsByClassName("menu")[0].style.padding = "20px 10px ";
    document.getElementById("nav-bar").style.padding = "16px 16px ";
  }
};
// Khai Biến
var all = document.getElementsByClassName("all");
var app = document.getElementsByClassName("app");
var card = document.getElementsByClassName("cards");
var web = document.getElementsByClassName("web");
var btn_tab = document.getElementsByClassName("btn-tab");
var btn_menu_link = document.getElementsByClassName("btn-menu-link");
document
  .getElementsByClassName("btn-all")[0]
  .addEventListener("click", function () {
    removeClassAction(btn_tab);
    for (var i = 0; i < all.length; i++) {
      all[i].style.display = "block";
    }
    this.classList.add("action");
  });
document
  .getElementsByClassName("btn-app")[0]
  .addEventListener("click", function () {
    removeClassAction(btn_tab);
    hiddenAll();
    for (var i = 0; i < app.length; i++) {
      app[i].style.display = "block";
    }
    this.classList.add("action");
  });
document
  .getElementsByClassName("btn-web")[0]
  .addEventListener("click", function () {
    removeClassAction(btn_tab);
    hiddenAll();
    for (var i = 0; i < app.length; i++) {
      web[i].style.display = "block";
    }
    this.classList.add("action");
  });
document
  .getElementsByClassName("btn-card")[0]
  .addEventListener("click", function () {
    removeClassAction(btn_tab);
    hiddenAll();
    for (var i = 0; i < app.length; i++) {
      card[i].style.display = "block";
    }
    this.classList.add("action");
  });
//
function hiddenAll() {
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = "none";
  }
}
function removeClassAction(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("action");
  }
}

//  Sử Lí Phần Menu Link
for (var i = 0; i < btn_menu_link.length; i++) {
  btn_menu_link[i].onclick = function () {
    removeClassAction(btn_menu_link);
    this.classList.add("action");
    closenavBar();
  };
}
document.getElementById("menu-home").click();

//

document.getElementById("nav-bar").addEventListener("click", togglenavBar);
function togglenavBar() {
  document
    .getElementsByClassName("menu__link")[0]
    .classList.toggle("show-menu");
}
function closenavBar() {
  document
    .getElementsByClassName("menu__link")[0]
    .classList.remove("show-menu");
}
