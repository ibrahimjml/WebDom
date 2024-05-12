// username addeventlistener ("keyup") when remove click on keyboard
const username = document.getElementById("username");
const divp= document.querySelectorAll(".parent-user p")[0];
username.addEventListener("keyup",(eo) => {
  username.classList.add("error");
  divp.style.display="block";

  if(username.value.length > 2){
    username.classList.remove("error");
    username.classList.add("success");
    divp.style.display="none";
    username.nextElementSibling.style.opacity="1";
  }else{
    username.classList.add("error");
    username.classList.remove("success");
    divp.style.display="block";
    username.nextElementSibling.style.opacity="0";
  }
   register();
}
);
// email addeventlistener ("keyup") when remove click on keyboard
const email = document.getElementById("email");
const div2p= document.querySelectorAll(".parent-user p")[1];
email.addEventListener("keyup",(eo) => {
  email.classList.add("error");
  div2p.style.display="block";
  
  const regEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regEmail.test(email.value)){
    email.classList.remove("error");
    email.classList.add("success");
    div2p.style.display="none";
    email.nextElementSibling.style.opacity="1";
  }else{
    email.classList.add("error");
    email.classList.remove("success");
    div2p.style.display="block";
    email.nextElementSibling.style.opacity="0";
  }
  register();
}
);
// password addeventlistener ("keyup") when remove click on keyboard
const pass = document.getElementById("psw");
const div3p= document.querySelectorAll(".parent-user p")[2];
pass.addEventListener("keyup",(eo) => {
  pass.classList.add("error");
  div3p.style.display="block";

  const regPasswords=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if(regPasswords.test(pass.value)){
    pass.classList.remove("error");
    pass.classList.add("success");
    div3p.style.display="none";
    pass.nextElementSibling.style.opacity="1";
  }else{
    pass.classList.add("error");
    pass.classList.remove("success");
    div3p.style.display="block";
    pass.nextElementSibling.style.opacity="0";
  }
  register();
}
);
// passrepeat addeventlistener 
const passrepeat = document.getElementById("psw-repeat");
const div4p= document.querySelectorAll(".parent-user p")[3];
passrepeat.addEventListener("keyup",(eo) => {
  passrepeat.classList.add("error");
  div4p.style.display="block";

  if(passrepeat.value === pass.value){
    passrepeat.classList.remove("error");
    passrepeat.classList.add("success");
    div4p.style.display="none";
    passrepeat.nextElementSibling.style.opacity="1";
  }else{
    passrepeat.classList.add("error");
    passrepeat.classList.remove("success");
    div4p.style.display="block";
    passrepeat.nextElementSibling.style.opacity="0";
  }
  register();
}
);

// remove "disabled" attribute when all input field success
const regbtn = document.getElementsByClassName("registerbtn")[0];
regbtn.setAttribute("disabled","");
const register = () => {
  if(username.classList.contains("success") && email.classList.contains("success") && pass.classList.contains("success") && passrepeat.classList.contains("success")){
    regbtn.removeAttribute("disabled"); 
  }else{
     regbtn.setAttribute("disabled","")
  }
}

const mybtn = document.getElementsByClassName("myButton")[3];
const parentform = document.getElementsByClassName("parent-of-form")[0];
const form = document.getElementsByTagName("form")[0];
const close = document.getElementById("close");

mybtn.onclick = () => {
  parentform.style.display="flex";
  setTimeout(() => {
    form.style.transform="scale(1)";
  }, 100)
  
}
close.onclick = () => {
  form.style.transform="scale(0)"
  setTimeout(() => {
    parentform.style.display="none"
  }, 600)
  
}



