// 1- change section bg when click on "section BG"
// const arr =["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"];
// let i=0;
// sectionbg.addEventListener("click",(eo) => {
//   const allsection = document.querySelectorAll('section')
//   allsection.forEach(item => {
//     item.style.backgroundColor=arr[i]
//     console.log(i)
//   })
  
//   i < arr.length-1 ? i++ : i=0;
// })

// 2- change section bg when click on "section BG" using math.random& rgb

sectionbg.addEventListener("click",(eo) => {
  const allsection = document.querySelectorAll('section')
  const rgb1= Math.round(Math.random()*255)
  const rgb2= Math.round(Math.random()*255)
  const rgb3= Math.round(Math.random()*255)
  allsection.forEach(item => {
    item.style.backgroundColor=`rgb(${rgb1},${rgb2},${rgb3})`
})  
})

// 3- change section bg when click on "section BG" using math.random& return fn
// const random2=()=>{
//   return Math.round(Math.random()*255)
// }

// sectionbg.addEventListener("click",(eo) => {
//   const allsection = document.querySelectorAll('section')
//   const rgb1= random2();
//   const rgb2= random2();
//   const rgb3= random2();
//   allsection.forEach(item => {
//         item.style.backgroundColor=`rgb(${rgb1},${rgb2},${rgb3})`
// })
// })

// 4-change section bg when click on "section BG" using math.random& tostring& slice
// sectionbg.addEventListener("click",(eo) => {
// const random= Math.random().toString(16).slice(2,8)
// const allsection = document.querySelectorAll('section')

// allsection.forEach(item => {
//   item.style.backgroundColor= `#${random}`
// })
// })

// 5-change section bg when click on "section BG" using math.random& tostring& slice & return fn

// const random3=()=>{
//   return `#${Math.random().toString(16).slice(2,8)}`
// }
//   sectionbg.addEventListener("click",(eo) => {
//     const allsection = document.querySelectorAll('section')
//     const hex = random3()
//     allsection.forEach(item => {
//       item.style.backgroundColor= hex
// })
//   })

// 6-change section bg when click on "section BG" without foreach using for loop
// const random4=()=>{
//   return `#${Math.random().toString(16).slice(2,8)}`
// }
//   sectionbg.addEventListener("click",(eo) => {
//     const allsection = document.querySelectorAll('section')
//     const hex = random4()
//       for(let i=0;i< allsection.length;i++){
//         const item =allsection[i];
//           item.style.backgroundColor= hex;
//           console.log(hex)
//       }
        
//   })

// 7-change section bg when click on "section BG" without foreach using for in loop

// const random5=()=>{
//   return `#${Math.random().toString(16).slice(2,8)}`;
// };
//   sectionbg.addEventListener("click",(eo) => {
//     const allsection = document.querySelectorAll('section')
//     const hex = random5()
//       for(let i in allsection){
//         const item = allsection[i]
//         item.style.backgroundColor= hex;
//       };
        
//   });

// 8-change section bg when click on "section BG" without foreach using for of loop

// const random5=()=>{
//   return `#${Math.random().toString(16).slice(2,8)}`;
// };
//   sectionbg.addEventListener("click",(eo) => {
//     const allsection = document.querySelectorAll('section')
//     const hex = random5()
//       for(let i of allsection){
//         const ele = i;
//         ele.style.backgroundColor= hex;
//       };
        
//   });

// 9-change section bg when click on "section BG" without foreach using while loop


// const random5=()=>{
//   return `#${Math.random().toString(16).slice(2,8)}`;
// };
//   sectionbg.addEventListener("click",(eo) => {
//     const allsection = document.querySelectorAll('section')
//     const hex = random5()
//     let i=0
//     while( i < allsection.length){
//       const ele =allsection[i];
//       ele.style.backgroundColor= hex
//       i++
//     }
        
//   });

// 10-change section bg when click on "section BG" without foreach using for ;; loop


// const random5=()=>{
//   return `#${Math.random().toString(16).slice(2,8)}`;
// };
//   sectionbg.addEventListener("click",(eo) => {
//     const allsection = document.querySelectorAll('section')
//     const hex = random5()
//     let i=0
//     for(;;){
//       if(i < allsection.length){
//         const ele =allsection[i]
//         ele.style.backgroundColor= hex
//         i++
//       }else{
//         break
//       }
//     }
        
//   });