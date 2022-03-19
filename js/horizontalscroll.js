// const scrollBox = document.getElementById("horizontal-scroll-box");
// //json connect
// let xmlht = new XMLHttpRequest();
// xmlht.open("GET", "my.json", false);
// xmlht.send();

// if (xmlht.readyState == 4 && xmlht.status == 200) {
//     console.log("Done");
//   var data = xmlht.responseText;
//   var result = JSON.parse(data);
//   var res = result["cards"];
//   for (let i = 0; i < res.length; i++) {
//     let element = res[i];
//     let src = element["src"];
//     scrollBox.innerHTML +=
//       ' <div class="card row a-center" onclick=' +
//       "showFullScreen('image/cetificate/" +
//       src +
//       "')" +
//       '>\
//             <img src="image/cetificate/' +
//       src +
//       '" alt="" class="card-image">\
//             <div class="caption row a-center">' +
//       element["title"] +
//       "</div>\
//             </div>";
//   }
// }

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

