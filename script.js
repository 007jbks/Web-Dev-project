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

const link_to_buy = document.getElementById('buy-now');
link_to_buy.addEventListener('click',()=>{
    
})
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

 const heads = document.querySelectorAll('.head');

    // Function to check if the element is in the viewport
    function checkVisibility() {
        heads.forEach(head =>{
      const rect = head.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        head.classList.add('visible'); // Trigger the animation by setting opacity to 1
      }
    });
    }


    // Listen for the scroll event and check visibility
    window.addEventListener('scroll', checkVisibility);

    // Initial check in case the element is already in view
    checkVisibility();


      // Get all elements with the 'head' class
    const scs = document.querySelectorAll('.scroll-animate');

    // Function to check if an element is in the viewport
    function check() {
      scs.forEach(sc => {
        const rect = sc.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          sc.classList.add('visible'); // Add 'visible' class when the element is in view
        }
      });
    }

    // Listen for the scroll event and check visibility
    window.addEventListener('scroll', check);

    // Initial check in case any element is already in view
    check();
