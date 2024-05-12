
const alltabs = document.getElementsByClassName("mybtn");
const parentbtn = document.getElementsByClassName("alltabs")[0];
const parentarticles = document.getElementsByClassName('parent-of-article')[0];

[...alltabs].forEach((item,index)=>{
  item.addEventListener('click',(eo) => {
    parentbtn.getElementsByClassName('active-btn')[0].classList.remove('active-btn');
    item.classList.add('active-btn');
    parentarticles.getElementsByClassName('active-article')[0].classList.remove('active-article');
    parentarticles.getElementsByClassName('fun-facts')[index].classList.add('active-article');
  }
  )
})
