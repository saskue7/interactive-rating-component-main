

const submit = document.querySelector(".submit")
const btns = document.querySelectorAll(".button")



let flag=1
let prev=0
btns.forEach(function(item){

  item.addEventListener("click",function(){
   if(flag){
    item.classList.toggle("showbutton")
    flag=0
    prev = item.value
    console.log(prev,flag)
   }
   else if(prev===item.value){
    console.log(prev,flag,'phele s h')

    item.classList.toggle("showbutton")
    flag=1
    
    
   }
   
    submit.addEventListener("click",function(){
      console.log(prev,flag,'y kaise')
      if(flag===0){
        document.body.innerHTML=`<div class="card2">
    <div class="img">
      <img src="./images/illustration-thank-you.svg" alt="">
    </div>
    <div class="calc">
      <h1>You selected ${prev} out of ${5}</h1>
    </div>
    <h1 class="header">Thank You!</h1>
    <div class="text">
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>
    </div>
  </div>
  <script src="index.js"></script>
  <script src="app.js"></script>`
      }
      else{
        submit.innerHTML=`<button>
        <a href="#">SUBMIT</a>
      </button>`
      }
      
    })
    

   
   
   
  })
  

})









