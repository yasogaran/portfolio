

const lineBar = document.querySelectorAll(".bar");
lineBar.forEach((bar)=>{
    let percentage = $(bar).attr("data-percentage");
    let subject = $(bar).attr("data-subject");
    $(bar).children("h1").text(subject);
    $(bar).children("abbr").text(percentage);
    $(bar).children("abbr").css("left",percentage+'%')
     $(bar).children("span").children(".line").css({'width':percentage+'%'});
})
let apperOption2 = [];
const apperOnScroll2= new IntersectionObserver(function(entries,apperOnScroll2){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.toggle("active");
            apperOnScroll2.unobserve(entry.target);
        }
    })
},apperOption2);

lineBar.forEach(bar=>{
    apperOnScroll2.observe(bar);
})