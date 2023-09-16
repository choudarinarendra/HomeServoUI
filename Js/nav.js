
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
//----------------------------
let view=document.getElementById("view")
let parent=document.getElementById("parent")
let divide_lene1=document.getElementById("divide-lene1")
let footer=document.getElementById("footer")

console.log(parent.children.length);
view.addEventListener('click',()=>{
    
    let result =parent.classList.toggle("true")
    if(result){
      parent.innerHTML +=` <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/cctv.png" alt="">
    <span>
      CCTV Security
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/tv.png" alt="">
    <span>
      TV
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/home_theatre.png" alt="">
    <span>
      Music-System&H.T.
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/computer-repair.png" alt="">
    <span>
      Pc Laptop
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/car-care.png" alt="">
    <span>
      Car Care
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/laundry.png" alt="">
    <span>
      Laundry
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/painting.png" alt="">
    <span>
      Painter
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/salon.png" alt="">
    <span>
      Salon-Beauty Parlour
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/photography.png" alt="">
    <span>
      Photography
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/mason.png" alt="">
    <span>
      Mason Contractor
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/fabrication.png" alt="">
    <span>
      Fabrication
    </span>
  </div>
  <div class="child">
    <img src="http://admin.ezhomeservices.in/Image/Category/gardening.png" alt="">
    <span>
      Gardening
    </span>
  </div>`
  view.textContent="View less Service"
    view.style.top='1200px'
    divide_lene1.style.top="930px"
    footer.style.top="1000px"
    
   }else{
    while(parent.children.length>12){
      parent.removeChild(parent.lastChild);
     
  }
  view.style.top="700px"
  divide_lene1.style.top="440px"
  footer.style.top="500px"
  view.textContent="View All Service"
   }
    

})
// -------------------top button-------------------------
let btn=document.getElementById("btn")
document.onscroll=()=>{
    btnVisible()
}
function btnVisible(){
  if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
    btn.style.display="block"
  }else{
    
    btn.style.display="none"
  }
}

btn.addEventListener('click',()=>{
  // document.body.scrollTop=0;
  // document.documentElement.scrollTop=0;
  /*
  The scrollTo() method of the Element interface scrolls to a
   particular set of coordinates inside a given element.
   */
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })

  
  
})

