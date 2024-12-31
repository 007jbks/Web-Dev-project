
const hamburger= document.getElementById('hamburger');
    const menu= document.getElementById('menu');
    const but1= document.getElementById('button1');
    const but2= document.getElementById('button2');
    const but3= document.getElementById('button3');
    const exp1= document.getElementById('button1-exp');
    const exp2= document.getElementById('button2-exp');
    const exp3= document.getElementById('button3-exp');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
    but1.addEventListener('click', () => {
        exp1.classList.toggle('open');
    });
    but2.addEventListener('click', () => {
        exp2.classList.toggle('open');
    });
    but3.addEventListener('click', () => {
        exp3.classList.toggle('open');
    });

let index = 0;
const all = document.querySelectorAll('.slideshow>div');
const next_button = document.getElementById('next-button');
function next(){
    all[index].style.zIndex = 1;
    index = (index+1)%all.length;
    all[index].style.zIndex = 5;
}
next_button.addEventListener('click',()=>
{
    next();
});

function prev(){
     all[index].style.zIndex = 1;
    index = (index-1+all.length)%all.length;
    all[index].style.zIndex = 5;
}
const prev_button = document.getElementById('prev-button');
prev_button.addEventListener('click',()=>{
 prev();
});
