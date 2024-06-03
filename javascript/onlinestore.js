const allbtns = document.querySelectorAll(".btn-primary");
allbtns.forEach(item =>{
  item.addEventListener("click",(eo) => {

  item.classList.replace("btn-primary","btn-success");
  item.innerHTML="&#10004;"
  item.setAttribute("disabled","");


  // create element "popup"
  const popup = document.createElement("div");
  const body = document.getElementById("body");
  body.append(popup);
  popup.classList.add("popup");
  popup.innerText="check your cart ";

  setTimeout(() => {
    popup.style.transform = "translateX(-50vw)";
    
  }, 500)
  
   setTimeout(() => {
     popup.remove();
   }, 1500)
   
  // create element "show cart"
   const showitem = document.createElement("div");
   body.append(showitem);
   showitem.classList.add("showitem");
   showitem.innerText=" my cart";


   const cart = document.querySelectorAll(".showitem");
   const cartmenu = document.querySelector(".cart-menu");
   cart.forEach(item =>{

     item.addEventListener("click",(eo) => {
       cartmenu.style.transform="translateX(0)";
       
     })
   })

   const blackscreen = document.getElementsByClassName("item-container");
   const active = document.getElementById("active");
   const totalprice = () => {
     let total = 0;
      [...blackscreen].forEach(item =>{
        const price = Number(item.getElementsByClassName("price")[0].innerText.replace("$",""));
        const quantity = Number(item.getElementsByClassName("input-quantity")[0].value);
      
        total = total + (price * quantity);
        
        
      })
      
      active.innerText = `${total}$`
      
    }
  
  const menubar = document.getElementsByClassName("cart-menu")[0];
  menubar.addEventListener("change",(eo) => {
  totalprice();
});

menubar.addEventListener("click",(eo) => {
  if(eo.target.classList.contains("btn-danger")){
     eo.target.parentElement.parentElement.remove();
     totalprice();
     const deletedproduct = eo.target.parentElement.parentElement.getElementsByClassName("product-name")[0].innerText;
     const allcards = document.getElementsByClassName("card");
     [...allcards].forEach(item =>{
      const nameproduct = item.getElementsByClassName("card-title")[0].innerText;
      if( nameproduct == deletedproduct){
        const truebtn = item.getElementsByClassName("btn-success")[0];
        truebtn.removeAttribute("disabled");
        truebtn.classList.replace("btn-success","btn-primary");
        truebtn.innerText="Buy";
      }
  
    })
  
  }
}
)
      
    
    
    
  
    
    const close = document.getElementById("close");
    close.addEventListener("click",(eo) => {
      cartmenu.style.transform="translateX(-110vw)";
    })
    
    const parentitem = item.parentElement.parentElement.parentElement;
    const imgsrc = parentitem.getElementsByClassName("card-img-top")[0].getAttribute("src");
    const itemdesc= parentitem.getElementsByClassName("card-title")[0].innerText;
    const itemprice = parentitem.getElementsByTagName("span")[0].innerText;
    const allproducts = document.getElementById("allproducts");

    const itemcontainer = `
    <div class="item-container">
        
    <div class="item-image">
      <img src="${imgsrc}" alt="">
      <p class="product-name">${itemdesc}</p>
    </div>
    <div class="quantity-item">
      <input type="number" class="input-quantity" value="1" min="1" id="number">
      <p>Quantity</p>
    </div>
    <div class="price">
      <p>${itemprice}</p>
    </div>
    <div class="dangr">
      <button class="btn btn-danger">Delete</button>
    </div>
    </div>
`
    
  
   allproducts.innerHTML += itemcontainer;
   totalprice();
  })
})