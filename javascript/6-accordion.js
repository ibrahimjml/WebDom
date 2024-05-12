const plus=document.getElementsByClassName("plus");

[...plus].forEach((item)=>{
  item.addEventListener('click',(eo)=>{
  
    const content= eo.target.parentElement.parentElement.getElementsByClassName("content")[0]
    content.classList.toggle("active")

    // change scrollHeight according to active class
    if(content.classList.contains("active")){
      content.style.height=`${content.scrollHeight}px`;
    }else{
      content.style.height=`0`;
    }

    // toggle "+" "-"
    item.classList.toggle("hide-plus")
    if(item.classList.contains("hide-plus")){
      item.innerHTML="_"
    item.style.transform="translateY(-11px)"
    }else{
      item.innerHTML="+"
      item.style.transform="translateY(0)"
    }
  })
})
