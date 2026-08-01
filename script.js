// Welcome Button
document.getElementById("welcomeBtn").onclick = function(){

    document.getElementById("message").innerHTML =
    "Welcome! Thanks for visiting my portfolio.";

};

// Dark Mode
document.getElementById("themeBtn").onclick = function(){

    document.body.classList.toggle("dark");

};

// Live Clock
function showTime(){

    const now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();

}

setInterval(showTime,1000);

// Scroll Button
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.documentElement.scrollTop>150){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}