//------------------Customer Details---------------------
let section=document.getElementById("section");
let details=document.getElementById("details")
let sect_dropdown=document.getElementById("sect_dropdown")
details.addEventListener('click',()=>{
    
    let cus_section=document.getElementById("cus_section")
    sect_dropdown.style.display='none'
    section.style.display="block"
    section.style.height="350px"
   if(cus_section.firstChild){
    while (cus_section.firstChild) {
        cus_section.removeChild(cus_section.firstChild);
      }
     
   }
   getdetails()
   async function getdetails(){
    let promi= await fetch(`http://localhost:8080/customers/${Number(sessionStorage.getItem("cust_id"))}`)
    let obj=await promi.json()
    

    let id=document.createElement("h1")
   id.setAttribute("id","id")
   id.textContent=`Id:${obj.data.id}`
   cus_section.appendChild(id)
    let name=document.createElement("h1")
    name.setAttribute("id","name")
    name.textContent=`Name:${obj.data.name}`
    cus_section.appendChild(name)
    let phone=document.createElement("h1")
     phone.setAttribute("id","phone")
     phone.textContent=`Phone:${obj.data.phone}`
     cus_section.appendChild(phone)
     let email=document.createElement("h1")
     email.setAttribute("id","email")
     email.textContent=`Email:${obj.data.email}`
     cus_section.appendChild(email)
     let familyCount=document.createElement("h1")
     familyCount.textContent=`familyCount:${obj.data.familyCount}`
     familyCount.setAttribute("id","family")
     cus_section.appendChild(familyCount)

   }
   
   

})


//----------------save work----------------------------
let savework_btn=document.getElementById("savework")
savework_btn.addEventListener('click',()=>{
    let cus_section=document.getElementById("cus_section")
    sect_dropdown.style.display='none'
    section.style.display="block"
    section.style.height="500px"
   if(cus_section.firstChild){
    while (cus_section.firstChild) {
        cus_section.removeChild(cus_section.firstChild);
      }
     
   }
  //  cus_section.style.marginTop="10px"
let form=document.createElement("form")
  form.setAttribute("id","form")
cus_section.appendChild(form)
   //typeofwork
   let typeofwork=document.createElement("input")
   typeofwork.setAttribute("id","typeOfWork")
   typeofwork.setAttribute("class","form_in")
   typeofwork.setAttribute("required","required");
   typeofwork.setAttribute("placeholder","Enter the Type of work")
   form.appendChild(typeofwork)
   let brek=document.createElement("br")
     form.appendChild(brek)
   //doorNo
   let doorNo=document.createElement("input")
   doorNo.setAttribute("name","d_No")
   doorNo.setAttribute("class","form_in")
   doorNo.setAttribute("required","required");
   doorNo.setAttribute("placeholder","Enter doorNumber")
   form.appendChild(doorNo)
   let brek2=document.createElement("br")
   form.appendChild(brek2)
   //street
   let street=document.createElement("input")
   street.setAttribute("name","street")
   street.setAttribute("required","required");
   street.setAttribute("class","form_in")
   street.setAttribute("placeholder","Enter street Name ")
   form.appendChild(street)
   let brek3=document.createElement("br")
   form.appendChild(brek3)
   //landmark
   let landMark=document.createElement("input")
   landMark.setAttribute("name","landMark")
   landMark.setAttribute("class","form_in")
   landMark.setAttribute("required","required");
   landMark.setAttribute("placeholder","Enter your landmark")
   form.appendChild(landMark)
   let brek4=document.createElement("br")
   form.appendChild(brek4)

   //pincode
   let pincode=document.createElement("input")
   pincode.setAttribute("name","pincode")
   pincode.setAttribute("required","required");
   pincode.setAttribute("class","form_in")
   pincode.setAttribute("placeholder","Enter your pincode")
   form.appendChild(pincode)
   let brek9=document.createElement("br")
   form.appendChild(brek9)
   //district
   let district=document.createElement("input")
   district.setAttribute("name","district")
   district.setAttribute("class","form_in")
   district.setAttribute("required","required");
   district.setAttribute("placeholder","Enter your District")
   form.appendChild(district )
   let brek6=document.createElement("br")
   form.appendChild(brek6)
  //state
  let state=document.createElement("input")
  state.setAttribute("name","state")
  state.setAttribute("class","form_in")
  state.setAttribute("required","required");
  state.setAttribute("placeholder","Enter your Statte")
  form.appendChild(state )
  let brek7=document.createElement("br")
  form.appendChild(brek7)
  // let brek8=document.createElement("br")
  // form.appendChild(brek8)
  //button
  let button=document.createElement("button")
   button.setAttribute("id","work_btn")
   button.textContent="Button"
   form.appendChild(button)
   form.onsubmit = function (e) {
  e.preventDefault()
    let formdata=new FormData(form)
    let obj=Object.fromEntries(formdata)
    let typeofwork1=document.getElementById("typeOfWork").value
   
    if(obj.pincode.length===6){
      if(form.children.length>16){
           let  breachild =document.getElementById("breakId")
           let spanChild=document.getElementById("spanid")
           form.removeChild(breachild)
           form.removeChild(spanChild)
      }
       
      obj.pincode=Number(obj.pincode)
    work_obj={
      typeOfWork:typeofwork1,
      address:obj
    }
   console.log(work_obj);
     savework(work_obj)
    }else{
      if(form.children.length<=16&&18>=form.children.length){
      let bre=document.createElement("br")
      bre.setAttribute("id","breakId")
    let pinErr=document.createElement("span")
    pinErr.setAttribute("id","spanid")
    
     
        pinErr.textContent="pincode must be  6 digits "
        pinErr.style.color="red"
        
        pincode.parentNode.insertBefore(bre, pincode);
        bre.parentNode.insertBefore(pinErr,bre)
      }
    }
    
    
    

}
   
})

async function savework(work){
   
  
   
   let promi=await fetch(`http://localhost:8080/works/${Number(sessionStorage.getItem("cust_id"))}`,{
    method:"POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(work)
   })
   let data= await promi.json();
   window.alert("save the Work Successfully")
     let inputs=document.getElementsByTagName("input")
     inputs[0].value=""
     inputs[1].value=""
     inputs[2].value=""
     inputs[3].value=""
     inputs[4].value=""
     inputs[5].value=""
     inputs[6].value=""
}

//-------------------Delete customer--------------------
 let cust_dele=document.getElementById("Cust_delete")
 cust_dele.addEventListener('click',()=>{
 let result =window.confirm("If you want delete customer click on Ok Button")
 if(result){
  fetch(`http://localhost:8080/customers/${Number(sessionStorage.getItem("cust_id"))}`,{
    method:"DELETE"
  })
  window.alert("Customer Details Successfully Deleted")
  sessionStorage.removeItem("cust_id")
  window.open("./index.html","_self")
 }

 })

 //------------------------update Customer--------------------
 let  cust_update=document.getElementById("cust_update")
 cust_update.addEventListener('click',()=>{
  window.open("./update_customer.html","_self")
 })
 //-----------------------logOut-------------------
 let  logOut=document.getElementById("logout")
 logOut.addEventListener('click',()=>{
  sessionStorage.removeItem("cust_id")
  //window.location.href ="./index.html"
  window.open("./index.html","_self")
 })


 //--------------------payment------------------
 let payment=document.getElementById("payment")
 payment.addEventListener(('click'),async ()=>{
  section.style.display='none'
  section.style.height="550px"
  
  sect_dropdown.style.display='block'
  let dropdown=document.getElementById("dropdown")
  dropdown.style.left='64%'
while(dropdown.firstChild){
  dropdown.removeChild(dropdown.firstChild)
}

  let promis=await fetch(`http://localhost:8080/vendors/All/${Number(sessionStorage.getItem('cust_id'))}`)
let data =await promis.json()


    if(data.length>0){
         let promis1=await fetch(`http://localhost:8080/works/${data[0].id}`)
     let data1 =await promis1.json()
       data1.data.map((work)=>{
        
        if(work.customer.id===Number(sessionStorage.getItem('cust_id'))){
          if(work.startDate!=null&work.endDate!=null){
                 if(work.cost!==null){
                  
            if(work.cost.mode===null){
             
            
                         let li=document.createElement('li')
                        li.textContent=work.typeOfWork
                        li.setAttribute('id',work.cost.id)
                        li.setAttribute('name',work.vendor.id)     
                        dropdown.appendChild(li)          
            }
          }
          }
        }
        let liElements=document.querySelectorAll("#dropdown li")
  
                liElements.forEach((li)=>{
                 li.addEventListener('click',()=>{
                           demo12(Number(li.id),Number(li.getAttribute('name')),li.textContent)
              
                 })
                  
               })
       })
    }

          
            if(dropdown.children.length===0){
              
               window.alert("There is No Completed Work")
            }
 

 })


 async function demo12(costid,vendorid,typeOfWork){
  
  section.style.display='block'
  sect_dropdown.style.display='none'
  let vendordata= await fetch(`http://localhost:8080/vendors/${vendorid}`)
  let vend=await  vendordata.json()

  let cus_section=document.getElementById("cus_section")
  while(cus_section.firstChild){
    cus_section.removeChild(cus_section.firstChild)
  }
  let work=document.createElement("span")
   work.textContent=`TypeOfWork:${typeOfWork}`
   cus_section.appendChild(work)
   let brea=document.createElement('br')
   cus_section.appendChild(brea)
  let vendorName=document.createElement("span")
  vendorName.textContent=`VendorNane:${vend.data.name}`
   cus_section.appendChild(vendorName)
   let brea1=document.createElement('br')
   cus_section.appendChild(brea1)
   let vendPhono=document.createElement("span")
     vendPhono.textContent=`vendorPhone:${vend.data.phoneNo}`
   cus_section.appendChild(vendPhono)
   let brea2=document.createElement('br')
   cus_section.appendChild(brea2)
    vend.data.cost.map((x)=>{
       if(x.id===costid){
        
       let amount=document.createElement("span")
       amount.textContent=`Amount:${x.totalAmount}`
       cus_section.appendChild(amount)
      
        
       }
    })
    let form=document.createElement('form')
    form.setAttribute('id',"form")
    cus_section.appendChild(form)
    let payMode=document.createElement('span')
    payMode.textContent="PaymentMode"
    form.appendChild(payMode)
    let br=document.createElement('br')
    form.appendChild(br)
    //paymt radio
    let paytmradio=document.createElement('input')
    paytmradio.setAttribute('type','radio')
    paytmradio.setAttribute("id","paytm")
    paytmradio.setAttribute('name',"paymentMode")
    form.appendChild(paytmradio)
    let label1=document.createElement('label')
    label1.setAttribute('for','paytm')
    form.appendChild(label1)
    let paytmimg=document.createElement('img')
    paytmimg.setAttribute('src',"../Image/paytm-logo.jpg")
    label1.appendChild(paytmimg)
    let br1=document.createElement('br')
    form.appendChild(br1)
    //phonepe radio
    let phoneperadio=document.createElement('input')
    phoneperadio.setAttribute('type','radio')
    phoneperadio.setAttribute("id","phonePe")
    phoneperadio.setAttribute('name',"paymentMode")
    form.appendChild(phoneperadio)
    let label2=document.createElement('label')
    label2.setAttribute('for','phonePe')
    form.appendChild(label2)
    let phonepeimg=document.createElement('img')
    phonepeimg.setAttribute('src','../Image/phonepe-logo.png')
    label2.appendChild(phonepeimg)
    let br2=document.createElement('br')
    form.appendChild(br2)
    // Gpay
    let Gpayradio=document.createElement('input')
    Gpayradio.setAttribute('type','radio')
    Gpayradio.setAttribute("id","GPay")
    Gpayradio.setAttribute('name',"paymentMode")
    form.appendChild(Gpayradio)
    let label3=document.createElement('label')
    label3.setAttribute('for','GPay')
    form.appendChild(label3)
   let Gpayimg =document.createElement('img')
   Gpayimg.setAttribute('src',"../Image/google-pay.png")
   label3.appendChild(Gpayimg)
   let br3=document.createElement('br')
    form.appendChild(br3)
    //Handcash
    let handcashradio=document.createElement('input')
    handcashradio.setAttribute('type','radio')
    handcashradio.setAttribute("id","Handcash")
    handcashradio.setAttribute('name',"paymentMode")
    form.appendChild(handcashradio)
    let label4=document.createElement('label')
    label4.setAttribute('for','Handcash')
    form.appendChild(label4)
    let handcashimg=document.createElement('img')
    handcashimg.setAttribute('src',"../Image/handcashlogjpg.jpg")
    label4.appendChild(handcashimg)
    let br4=document.createElement('br')
    form.appendChild(br4)
    //button
    let button=document.createElement("button")
    button.setAttribute('id','button_btn')
    button.textContent="payment"
    form.appendChild(button)

  form.onsubmit=(e)=>{
      e.preventDefault()
      let paytm=document.getElementById("paytm")
      let phonePe=document.getElementById("phonePe")
      let gpay=document.getElementById("GPay")
      let handcash=document.getElementById("Handcash")
    if (paytm.checked){
      paymentmode(paytm.id,costid)
    }else if(phonePe.checked){
      paymentmode(phonePe.id,costid)
    }
    else if( gpay.checked){
      paymentmode(gpay.id,costid)
    }else if(handcash.checked){
      paymentmode(handcash.id,costid)
    }
      
  }


 }
 async function paymentmode(mode1,id){
   let promi=await fetch(`http://localhost:8080/cost/${Number(sessionStorage.getItem('cust_id'))}`,{
    method:"PUT",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      id:id,
      mode:mode1
    })
    
   })
   let data =await promi.json()
   window.alert("payment Transation Success")
   section.style.display="none"
 }
 //-----------------------List of Vendor-----------------------------
 let list_ven=document.getElementById("list_vendor")
 list_ven.addEventListener("click",async ()=>{
  section.style.display='none'
  section.style.height="550px"
 
  sect_dropdown.style.display='block'
  let dropdown=document.getElementById("dropdown")
  dropdown.style.left="79%"
  while(dropdown.firstChild){
    dropdown.removeChild(dropdown.firstChild)
  }
  
    let promis=await fetch(`http://localhost:8080/vendors/All/${Number(sessionStorage.getItem('cust_id'))}`)
  let data =await promis.json()
  
  data.map((vendor)=>{
    
    let li=document.createElement('li')
    li.textContent=vendor.name
    li.setAttribute('id',vendor.id)
       
    dropdown.appendChild(li)  
  })
  
  let liElements=document.querySelectorAll("#dropdown li")
  
  liElements.forEach((li)=>{
   li.addEventListener('click',()=>{
            
    listOfV(Number(li.id))
   })
    
 })
    if(dropdown.children.length===0){
      window.alert("There is No Vendors ")
    }
 })

async function listOfV(vendorid){
  section.style.display='block'
  sect_dropdown.style.display='none'
  section.style.height="350px"
  let vendordata= await fetch(`http://localhost:8080/vendors/${vendorid}`)
  let vend=await  vendordata.json()

  let cus_section=document.getElementById("cus_section")
  while(cus_section.firstChild){
    cus_section.removeChild(cus_section.firstChild)
  }
  let Ven_name=document.createElement("h1")
  Ven_name.textContent=`VendorName:${vend.data.name}`
  cus_section.appendChild(Ven_name)
  let ven_num=document.createElement("h1")
  ven_num.textContent=`VendorPhno:${vend.data.phoneNo}`
  cus_section.appendChild(ven_num)
  let ven_Email=document.createElement("h1")
     ven_Email.textContent=`Email:${vend.data.email}`
     cus_section.appendChild(ven_Email)
  let ven_cost=document.createElement("h1")
  ven_cost.textContent=`CostPerDay:${vend.data.costPerDay}`
  cus_section.appendChild(ven_cost)
  let ven_Role=document.createElement("h1")
  ven_Role.textContent=`Role:${vend.data.role}`
  cus_section.appendChild(ven_Role)
 }