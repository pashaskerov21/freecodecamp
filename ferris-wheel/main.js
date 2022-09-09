function startCarousel(){
    let wheel = document.querySelector(".wheel");
    let cabin = document.querySelectorAll(".cabin");
    wheel.style.animationName = "wheel";
    cabin[0].style.animationName = "cabins";
    cabin[1].style.animationName = "cabins";
    cabin[2].style.animationName = "cabins";
    cabin[3].style.animationName = "cabins";
    cabin[4].style.animationName = "cabins";
    cabin[5].style.animationName = "cabins";
    wheel.style.animationDuration = "10s";
    cabin[0].style.animationDuration = "10s";
    cabin[1].style.animationDuration = "10s";
    cabin[2].style.animationDuration = "10s";
    cabin[3].style.animationDuration = "10s";
    cabin[4].style.animationDuration = "10s";
    cabin[5].style.animationDuration = "10s";

}
function stopCarousel(){
    let wheel = document.querySelector(".wheel");
    let cabin = document.querySelectorAll(".cabin");
    wheel.style.animationName = "no-wheel";
    cabin[0].style.animationName = "no-cabins";
    cabin[1].style.animationName = "no-cabins";
    cabin[2].style.animationName = "no-cabins";
    cabin[3].style.animationName = "no-cabins";
    cabin[4].style.animationName = "no-cabins";
    cabin[5].style.animationName = "no-cabins";

}

function increaseSpeed2x(){
    let wheel = document.querySelector(".wheel");
    let cabin = document.querySelectorAll(".cabin");
    wheel.style.animationDuration = "5s";
    cabin[0].style.animationDuration = "5s";
    cabin[1].style.animationDuration = "5s";
    cabin[2].style.animationDuration = "5s";
    cabin[3].style.animationDuration = "5s";
    cabin[4].style.animationDuration = "5s";
    cabin[5].style.animationDuration = "5s";
}

function increaseSpeed5x(){
    let wheel = document.querySelector(".wheel");
    let cabin = document.querySelectorAll(".cabin");
    wheel.style.animationDuration = "2s";
    cabin[0].style.animationDuration = "2s";
    cabin[1].style.animationDuration = "2s";
    cabin[2].style.animationDuration = "2s";
    cabin[3].style.animationDuration = "2s";
    cabin[4].style.animationDuration = "2s";
    cabin[5].style.animationDuration = "2s";
}
function increaseSpeed100x(){
    let wheel = document.querySelector(".wheel");
    let cabin = document.querySelectorAll(".cabin");
    wheel.style.animationDuration = "0.1s";
    cabin[0].style.animationDuration = "0.1s";
    cabin[1].style.animationDuration = "0.1s";
    cabin[2].style.animationDuration = "0.1s";
    cabin[3].style.animationDuration = "0.1s";
    cabin[4].style.animationDuration = "0.1s";
    cabin[5].style.animationDuration = "0.1s";
}