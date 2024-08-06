let hamburger = document.getElementById('hamburger');
let menuitems = document.getElementById('menu');
let hireme = document.querySelector("#home-btn");
let about = document.querySelector("#abt-btn")

hamburger.addEventListener("click",()=>{
    menuitems.classList.toggle("active");
});

hireme.addEventListener("click",()=>{
    var phoneNumber = '6379125530';

    if ('launchCall' in navigator) {
        navigator.launchCall(phoneNumber);
    } else {
        alert('Please call '+ phoneNumber);
    } 
});

about.addEventListener("click",()=>{
    window.location.href = '../photos/about.html';
})

