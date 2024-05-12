//  toggle the light & dark mode
{
  const dark = document.getElementById("dark");
  
  
  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

const body = document.getElementById("body");

//  when hover on  HEADER => change-color
// changecolor.addEventListener("mousemove", (eo) => {
//   hiddenul.style.display = "block";
// });
const changecolor = document.getElementById("changecolor");
changecolor.addEventListener("mousemove",(eo) => {
  hiddenul.style.display="block";
  
}
)

body.addEventListener("click",(eo) => {
  hiddenul.style.display="none"
})
body.addEventListener("click",(eo) => {
  hiddenul2.style.display="none"
})
const change = document.getElementById("javak");
changecolor.addEventListener("mouseout", (eo) => {
  hiddenul.style.display = "none";
});
change.addEventListener("mousemove",(eo) => {
  hiddenul2.style.display="block";
});

change.addEventListener("mouseout",(eo) => {
  hiddenul2.style.display="none";
});
// change HEADER background when click on "header BG"
const header=document.getElementsByClassName('myheader')[0]
headerbg.addEventListener("click",(eo) => {
  const random = Math.round(Math.random()*360);
  header.style.backgroundColor=`hsl(${random},44%, 55%)`

  dark.style.backgroundColor=`hsl(${Math.round(Math.random()*360)},34%, 65%)`
})

// change title bg when click on "title BG"
titlebg.addEventListener("click",(eo) => {
  const alltitle= document.querySelectorAll("h1:not(header>h1)");
  const random=Math.round(Math.random()*360)
  alltitle.forEach((item)=>{
    
    item.style.backgroundColor=`hsl(${random},44%, 55%)`
  })
})

// change title color when click on "title color"
const random=()=>{
  return Math.round(Math.random()*360)
}

titlecolor.addEventListener("click",(eo) => {
  const alltitle= document.querySelectorAll("h1:not(header>h1)");
  alltitle.forEach(item=>{
    item.style.color=`hsl(${random()},44%, 55%)`
  })
}
)




//observer1
document.addEventListener("DOMContentLoaded", function(){
  const observerOptions = {
      root: null,
      threshold: 0.8,
      rootMargin: '0px'
  }

  const observer = new IntersectionObserver(function(elements, observer){
      elements.forEach(function(element){
          if(element.isIntersecting){
            console.log(element.target);  
              element.target.classList.add("animate");
          }
      })
  }, observerOptions);
  
  document.querySelectorAll(".cont").forEach(item=>{
      observer.observe(item);

  })

});

//observer2
document.addEventListener("DOMContentLoaded", function(){
  const observerOptions = {
      root: null,
      threshold: 0.8,
      rootMargin: '0px'
  }

  const observer = new IntersectionObserver(function(elements, observer){
      elements.forEach(function(element){
          if(element.isIntersecting){
            console.log(element.target);  
              element.target.classList.add("animate2");
          }
      })
  }, observerOptions);
  
  document.querySelectorAll(".cont1").forEach(item=>{
      observer.observe(item);

  })

});
// btn scroll to top
const btn = document.getElementsByClassName("btnscroll")[0];
window.onscroll=()=>{
if(this.scrollY >= 235){
  btn.style.opacity='1';
  setTimeout(() => {
    btn.style.opacity="0";
  }, 4000)
  
}
};

btn.onclick=()=>{
scrollTo({
  top:0,
  behavior:"smooth"
})
}