//------------------------------MOUSE PARALLAX------------------------------------
document.addEventListener("mousemove",parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}
//------------------------------TOGGLE------------------------------------
function showElement(num) {
    function toggle_visibility(cl){
   var els = document.getElementsByClassName(cl);
   for (var i = 0; i < els.length; i++){
      var s = els[i].style;
        s.display = s.display === 'flex' ? 'none' : 'flex';
      
   }
}
    if(num=='1'){
        toggle_visibility('target_1');
    }else if(num=='2'){
        toggle_visibility('target_2');
    }
    else if(num=='3'){
        toggle_visibility('target_3');
    }
    else if(num=='4'){
        toggle_visibility('target_4');
    }
    else{
        toggle_visibility('target_5');
    }
}
//------------------------------SCROLL------------------------------------
function isVisible(element){
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -500;

    if(elementBox.top - window.innerHeight < distanceFromTop){
        return true;
    }else{
        return false;
    }
}

function scanDocument(){
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section){
        if(isVisible(section)){
            section.classList.remove('hidden');
        }else{
             section.classList.add('hidden');
        };
    });
}

document.addEventListener("scroll",scanDocument);

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll",scrollFunction);

function scrollFunction(){
    if(window.scrollY > 300){//Show backToTopButton
        backToTopButton.style.display = "block";
    }
    else{//Hide backToTopButton
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}
//------------------------------HAMBURGER------------------------------------
const hamburger = document.querySelector(".hamburger");
const navCenter = document.querySelector(".nav-center");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navCenter.classList.toggle("active");
})


