const digitalclock = () => {
  
  let now = new Date();
  let date= now.toDateString()
  let hours= now.getHours()
  let mins= now.getMinutes()
  let sec= now.getSeconds()
  let pmam= "am"
  


 if( hours > 12){
  hours= hours-12
  pmam ="pm"
 }
 if( sec < 10){
  sec = `0${sec}`
 }
 if( mins < 10){
  mins = `0${mins}`
 }
 if( hours < 10){
  hours = `0${hours}`
 }

 
  const clock =  
  `<span class="date">
    ${date}
  </span>
  <span class="time">
    ${hours} : ${mins} : ${sec} ${pmam}
  </span>`
  const container = document.getElementById("clockcontainer")
  container.innerHTML= clock
}
setInterval( digitalclock, 1000)

