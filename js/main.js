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

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "result.json", false);
xmlhttp.send();
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  var result = xmlhttp.responseText;
  var data = JSON.parse(result);

  var firstResult = data[0]["first"];
  var secondResult = data[1]["second"];
  var abouttext = data[2]["about"];

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
