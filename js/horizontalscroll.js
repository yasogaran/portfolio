//fullscreen show
let carouselIndex = 0;
const fullScreen = document.getElementById("full-screen");
const fullScreenPreview = document.getElementById("full-screen-preview");

function showFullScreen(a) {
  fullScreenPreview.attributes["src"].value = a;
  fullScreen.classList.add("active");
}
function closeFullScreen() {
  fullScreen.classList.remove("active");
}

//horizontal scroll
const hScroll = document.querySelector(".horizontal-scroll-container");
const sCount = document.querySelector(".horizontal-scroll-box");
const maxScroll = -sCount.offsetWidth + hScroll.offsetWidth;
const scrollAmmount = 300;
let currentScrollPosition = 0;

function scrollHorizontal(val) {        
  currentScrollPosition += val * scrollAmmount;
  if (currentScrollPosition > 0) {
    currentScrollPosition = 0;
  }
  if (currentScrollPosition < maxScroll) {
    currentScrollPosition = maxScroll;
  }
  sCount.style.left = currentScrollPosition + "px";
}


//drag function///////////////////////////////
/* let pressed = false;
let startX;
let x;

hScroll.addEventListener('mousedown',(e)=>{
  pressed = true;
  startX = e.offsetX - sCount.offsetLeft;
  hScroll.style.cursor = 'grabbing'
})
hScroll.addEventListener('mouseleave',()=>{
  hScroll.style.cursor = 'default';
})
hScroll.addEventListener('mouseup',()=>{
  hScroll.style.cursor = 'grab';
})
hScroll.addEventListener('mouseup',()=>{
  pressed = false;
})
hScroll.addEventListener('mousemove',(e)=>{
  if(!pressed) return;
  e.preventDefault();
  x= e.offsetX;
  sCount.style.left = (x-startX)+'px';
checkBoundary();
})

function checkBoundary(){
  let outer = hScroll.getBoundingClientRect();
  let inner = sCount.getBoundingClientRect();
  if(parseInt(sCount.style.left)>0){
    sCount.style.left = '0px';
  }else if(inner.right < outer.right){
    sCount.style.left = (outer.width - inner.width) + 'px';
  }
}

checkBoundary() */