//fadein and slide_in
const faders =document.querySelectorAll(".fade_in");
const apperOptions = {};
const apperOnScroll = new IntersectionObserver(function(entries,apperOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }else{
      entry.target.classList.toggle("apper");
      apperOnScroll.unobserve(entry.target);
    }
  })
},apperOptions);

faders.forEach(fader=> {
apperOnScroll.observe(fader);
})


//character animation
let paragraph = document.getElementById("ani-char");
    let str =paragraph.innerHTML ;
    paragraph.innerHTML = "";
    let i =0;
    var animChar =setInterval(function(){
        paragraph.innerHTML +=  str.charAt(i);
        i++;
        if(i>str.length){
            clearInterval(animChar);
        }
    },100);