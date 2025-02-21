let addcart = document.querySelector('.add-cart');
let openShopping = document.getElementById('bag-icon');
let closeShopping = document.getElementById('close-icon');

// ---------------------------------------------------------
openShopping.onclick = function(){
    addcart.style.display="block";
}
closeShopping.onclick = function(){
    addcart.style.display="none";
}
// ----------------------------------------------------------


let dropPages = document.querySelector('.drop-content-pages');
let navPages  = document.getElementById('pages');
let closePages = document.getElementById('close-pages');

navPages.onclick = function(){
    dropPages.style.display="block";
}
closePages.onclick = function(){
    dropPages.style.display="none";
}
// ----------------------------------------------------------
let dropShop = document.querySelector('.drop-content-shop');
let navShop  = document.getElementById('shop');
let closeShop = document.getElementById('close-shop');

navShop.onclick = function(){
    dropShop.style.display="block";
}
closeShop.onclick = function(){
    dropShop.style.display="none";
}
// ---------------------------------------------------------
let dropAbout = document.querySelector('.drop-content-about');
let navAbout  = document.getElementById('about');
let closeAbout = document.getElementById('close-about');

navAbout.onclick = function(){
    dropAbout.style.display="block";
}
closeAbout.onclick = function(){
    dropAbout.style.display="none";
}
// -----------------------------------------------------------
let dropAccount = document.querySelector('.dropdown-content');
let navAccount  = document.getElementById('account');
let closeAccount = document.getElementById('close-account');

navAccount.onclick = function(){
    dropAccount.style.display="block";
}
closeAccount.onclick = function(){
    dropAccount.style.display="none";
}