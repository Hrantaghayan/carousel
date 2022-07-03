const slider = document.getElementById('slider');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const items = document.getElementsByClassName('item');
const play = document.getElementById('btn1')
const stopbt = document.getElementById('btn2')
arrowLeft.addEventListener('click', showPreviousSlide);
arrowRight.addEventListener('click', showNextSlide);
slider.addEventListener('keyup', onSliderKeyUp);
play.addEventListener('click',interval)
stopbt.addEventListener('click',interval)
let currentSlideIndex = 0;
let timeid;
function interval(event){
    // debugger
    clearInterval(timeid)
if(event.currentTarget.id === play.id){
    timeid = setInterval(function (){
       showNextSlide(event)
    },1500)
}
else{
    clearInterval(timeid)
}
}
function showNextSlide(event) {
    if(event.target.id !== play.id){
        clearInterval(timeid)
    }
    //  debugger
    currentSlideIndex++;
    if (currentSlideIndex === items.length)
        currentSlideIndex = 0;
    showSlide(currentSlideIndex);
}

function showPreviousSlide(event){ 
    clearInterval(timeid)
    // debugger
    currentSlideIndex--;
    if (currentSlideIndex === -1)
        currentSlideIndex = items.length - 1;
    showSlide(currentSlideIndex);
}

function showSlide(index) {
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    items[index].style.display = 'block';
}

function onSliderKeyUp(event) {
    clearInterval(timeid)
    console.log(1)
    // debugger
    switch (event.key) {
        case 'ArrowLeft':
            showPreviousSlide();
            break;
        case 'ArrowRight':
            showNextSlide(event);
            break;
    }
}
