// random videos
const container=document.getElementById('containeriframe')
let i=0;
btn.addEventListener("click",(eo) => {
  
  const randomvideo =[
    '<iframe id="myiframe" src="https://www.youtube.com/embed/sBLrEtpJrMg?si=aRX_tngBQoBy4LOi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe id="myiframe" src="https://www.youtube.com/embed/_bjzxnatn7M?si=BMkA_XSZNTBW5bAv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe id="myiframe" src="https://www.youtube.com/embed/rq5u6bYcCIw?si=lSda_Z5Dt8ho6OiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe id="myiframe" src="https://www.youtube.com/embed/9_Oc4RP9XZ8?si=Ts2rxG3SjcVgxnvG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe id="myiframe" src="https://www.youtube.com/embed/CTPX1vj9jSo?si=GY0KXy4TNDFOWzsd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    

  ]
    container.innerHTML=randomvideo[i];
    i++
    if(i > randomvideo.length-1){
      i=0;
    }
}
)

// random qoutes
const containerquote=document.getElementById('containerquote')
let index=0;
btn2.addEventListener('click',(eo) => {
  const randomquote=[
    `<blockquote class="sidekick">
    The time is always right to do what is right 
    <br>
    <cite> Martin Luther</cite>
    </blockquote>`,
    `<blockquote class="sidekick">
    If you’re offered a seat on a rocket ship, don’t ask what seat. Just get on. 
    <br>
    <cite> Sheryl Sandberg</cite>
    </blockquote>`,
    `<blockquote class="sidekick">
    Winning isn’t everything, but wanting to win is.
    <br>
    <cite> Vince Lombardi</cite>
    </blockquote>`,
    
    ]
    containerquote.innerHTML= randomquote[index];
    index++
    if(index > randomquote.length-1){
      index=0;
    }
}
)
