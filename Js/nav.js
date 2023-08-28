let customer=document.getElementById("customer")

customer.addEventListener('click',()=>{
   
    let demo=document.getElementById("sub-nav1");
   
   let display =demo.classList.toggle("true")
   if(display){
    demo.style.display="block"
   }else{
    demo.style.display="none"
   }
})

let vendor=document.getElementById("vendor")


vendor.addEventListener('click',()=>{
    let demo=document.getElementById("sub-nav2");
    console.log(demo);
   let display =demo.classList.toggle("true")
   if(display){
    demo.style.display="block"
   }else{
    demo.style.display="none"
   }
})
//code starts for service functionlaity
let service=document.getElementById("service")

service.addEventListener('click',()=>{
    let dropdown=document.querySelector("#drop-down")
    console.log(dropdown);
    let display=dropdown.classList.toggle("none")
    if(display){
        dropdown.style.display="block"
      
    }else{
        dropdown.style.display="none"
    }
})
let bg_image=document.getElementById("bg-image")
bg_image.addEventListener('click',()=>{
    let dropdown=document.querySelector("#drop-down")
    console.log(dropdown);
    let display=dropdown.classList.toggle("block")
    if(display){
        dropdown.style.display="none"
    }
})
