const section = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-item");
window.addEventListener("scroll",()=>{
    let current = "";
    section.forEach((sec) => {
        const sectionTop = sec.offsetTop;
        const sectionHeight = sec.clientHeight;
        if(pageYOffset >= sectionTop-100){
            current = sec.getAttribute("id");
        }
    });
    navLi.forEach((li)=>{
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active");
        }
    });
})
//JSON Connect
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "main.json", false);
xmlhttp.send();
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  var result = xmlhttp.responseText;
  var data = JSON.parse(result);

  var firstResult = data["resultOne"];
  var secondResult = data["resultTwo"];
  var abouttext = data["about"];
  var cetificate = data['cetificates']
  var extra = data["extra"];
  let output ='';
  for (let i = 0; i < firstResult.length; i++) {
    const element = firstResult[i];
    output += "<tr><th>" +
      element["name"] +
      "</th><td>" +
      element["result"] +
      "</td></tr>";
}
document.getElementById("olresult").innerHTML = output;

output = '';
  for (let j = 0; j < secondResult.length; j++) {
    const element = secondResult[j];
    output +=
      "<tr><th>" +
      element["name"] +
      "</th><td>" +
      element["result"] +
      "</td></tr>"; 
  }
  document.getElementById("ALresult").innerHTML = output;
}

document.getElementById("abouttext").innerHTML = abouttext;

//for cetififcate section
const scrollBox = document.getElementById("horizontal-scroll-box");
for (let i = 0; i < cetificate.length; i++) {
  let element = cetificate[i];
  let src = element["src"];
  scrollBox.innerHTML +=
    ' <div class="card row a-center" onclick=' +
    "showFullScreen('image/cetificate/" +
    src +
    "')" +
    '>\
          <img src="image/cetificate/' +
    src +
    '" alt="" class="card-image">\
          <div class="caption row a-center">' +
    element["title"] +
    "</div>\
    <div class='search-logo'></div> \
          </div>";
}

//for sports and socity
const extraBox = document.getElementById("extra-box");
for (let i = 0; i < extra.length; i++) {
  const element = extra[i];
  extraBox.innerHTML +='<div class="card">\
  <h2>'+element["name"] +'</h2>\
  <p>'+element["duration"] +'</p>\
  <img src="image/'+element["logo"] +'" alt="" />\
</div>';
}



//navmenu @ mobile
const menu = document.querySelector('.menu');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click',()=>{
  menu.classList.toggle('active');
  toggleButton.classList.toggle('active');
  
})

navLi.forEach((link)=>{
  link.addEventListener('click',()=>{
    menu.classList.toggle('active');
    toggleButton.classList.toggle('active');

  })
})
