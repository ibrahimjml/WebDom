const jml = [
  `<img src="./images/backiee-134061.jpg" alt="" class="images-slides">`,
  `<img src="./images/backiee-138862.jpg" alt="" class="images-slides">`,
  `<img src="./images/backiee-85172.jpg" alt="" class="images-slides">`,
  `<img src="./images/backiee-91043.jpg" alt="" class="images-slides">`,
  `<img src="./images/backiee-97425.jpg" alt="" class="images-slides">`,
];
let j = 0;
const container1 = document.getElementById("container-slide");

container1.innerHTML += jml[j];
container1.innerHTML += `<p class="parag">${j + 1}</p>`;

const nxt = document.getElementById("next");
const pre = document.getElementById("pre");
pre.setAttribute("disabled", "");

nxt.addEventListener("click", () => {
  pre.removeAttribute("disabled");
  j++;
  container1.innerHTML = jml[j];
  container1.innerHTML += `<p class="parag">${j + 1}</p>`;
  if (j + 1 == jml.length) {
    nxt.setAttribute("disabled", "");
  }
  parentslide.getElementsByClassName("active")[0].classList.remove("active");
  parentslide.getElementsByTagName("button")[j].classList.add("active");
});

pre.addEventListener("click", () => {
  nxt.removeAttribute("disabled");
  j--;
  container1.innerHTML = jml[j];
  container1.innerHTML += `<p class="parag">${j + 1}</p>`;
  if (j == 0) {
    pre.setAttribute("disabled", "");
  }
  parentslide.getElementsByClassName("active")[0].classList.remove("active");
  parentslide.getElementsByTagName("button")[j].classList.add("active");
});

const mynum = document.getElementsByClassName("my-num");
const parentslide = document.getElementsByClassName("divnum")[0];
Array.from(mynum).forEach((item, index) => {
  item.addEventListener("click", () => {
    // remove current class("active") then add class("active") to target button
    parentslide.getElementsByClassName("active")[0].classList.remove("active");
    item.classList.add("active");

    container1.innerHTML = jml[index];
    container1.innerHTML += `<p class="parag">${index + 1}</p>`;

    j = index;

    if (index == jml.length - 1) {
      nxt.setAttribute("disabled", "");
      pre.removeAttribute("disabled");
    } else if (index == 0) {
      nxt.removeAttribute("disabled");
      pre.setAttribute("disabled", "");
    } else {
      nxt.removeAttribute("disabled");
      pre.removeAttribute("disabled");
    }
  });
});
