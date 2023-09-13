//----------------------vendor details---------------------
let details=document.getElementById("details")
let section=document.getElementById("section");
let drop_setion=document.getElementById("drop_section")
let work_table=document.getElementById("work_table")
details.addEventListener('click',()=>{
    
    let cus_section=document.getElementById("cus_section")
    drop_setion.style.display="none"
    work_table.style.display='none'
    section.style.display="block"
   
    
   if(cus_section.firstChild){
    while (cus_section.firstChild) {
        cus_section.removeChild(cus_section.firstChild);
      }
     
   }
   getdetails()
   async function getdetails(){
    let promi= await fetch(`http://localhost:8080/vendors/${Number(sessionStorage.getItem("Ven_id"))}`)
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
     phone.textContent=`Phone:${obj.data.phoneNo}`
     cus_section.appendChild(phone)
     let email=document.createElement("h1")
     email.setAttribute("id","email")
     email.textContent=`Email:${obj.data.email}`
     cus_section.appendChild(email)
     let role=document.createElement("h1")
     role.textContent=`role:${obj.data.role}`
     role.setAttribute("id","role")
     cus_section.appendChild(role)
     let costPerDay=document.createElement("h1")
     costPerDay.textContent=`costPerDay:${obj.data.costPerDay}`
     costPerDay.setAttribute("id","costPerDay")
     cus_section.appendChild(costPerDay)

   }
})
//---------------------update Vendor-----------------------------
let  cust_update=document.getElementById("vend_update")
 cust_update.addEventListener('click',()=>{
  window.open("./update_vendor.html","_self")
 })
 //-----------------------------Delete Vendor----------------
 let vend_delete=document.getElementById("vend_delete")
 vend_delete.addEventListener('click',()=>{
 let result =window.confirm("If you want delete vendor click on Ok Button")
 if(result){
  fetch(`http://localhost:8080/vendors/${Number(sessionStorage.getItem("Ven_id"))}`,{
    method:"DELETE"
  })
  window.alert("your Account Successfully Deleted")
  sessionStorage.removeItem("Ven_id")
  window.open("./index.html","_self")
 }

 })
 //---------------------------------work reqirement--------------------
 let work_re=document.getElementById("work_re")
 work_re.addEventListener('click',()=>{
  section.style.display="none"
  work_table.style.display='none'
  drop_setion.style.display="block"
  
  demo()
  
    
 })

 async function demo() {
  
      let promi=await fetch(`http://localhost:8080/works/${Number(sessionStorage.getItem("Ven_id"))}`)
      let data=await promi.json()
     //  console.log(data);
     let dropdown=document.getElementById("dropdown")
     dropdown.style.left="38%"

     while(dropdown.firstChild){
      dropdown.removeChild(dropdown.firstChild)
     }
   
     
      data.data.map((a)=>{
         
            if(a.startDate===null&&a.endDate===null){
             
              let li=document.createElement("li")
              li.setAttribute("id",`${a.id}`)
              
             li.textContent=a.typeOfWork
            
             dropdown.appendChild(li)
               

            }
      })

let liElements=document.querySelectorAll("#dropdown li")

  liElements.forEach((li)=>{
    li.addEventListener('click',()=>{
    
      workfetch(Number(li.id))
     
    })
    
  })
    if(dropdown.children.length===0){
     window.alert("No work present in webSite") 
    }
 }

async function workfetch(id) {
 let promi= await fetch(`http://localhost:8080/works/${Number(sessionStorage.getItem("Ven_id"))}/${id}`)
 let data=await promi.json()
   
   
   section.style.display="block"
   drop_setion.style.display="none"
   let cus_section=document.getElementById("cus_section")
   while(cus_section.firstChild){
    cus_section.removeChild(cus_section.firstChild)
   }
   //customerName
    let customerName=document.createElement("h1")
     customerName.textContent=`CustName:${data.data.customer.name}`
     cus_section.appendChild(customerName)
     //phone
    let phone=document.createElement("h1");
    phone.textContent=`CustomerPhno:${data.data.customer.phone}`
    cus_section.appendChild(phone)
    //workName
    let workName=document.createElement("h1")
    workName.textContent=`WorkName:${data.data.typeOfWork}`
    cus_section.appendChild(workName)
    //place
    let place=document.createElement("h1")
    place.textContent=`Place:${data.data.address.landMark}`
    cus_section.appendChild(place)
    //pincode
    let pincode=document.createElement("h1")
    pincode.textContent=`pincode:${data.data.address.pincode}`
    cus_section.appendChild(pincode)
    let startWork=document.createElement('h1')
    startWork.textContent="StartWork"
    startWork.setAttribute("id","startwork")
    cus_section.appendChild(startWork)
    
  startWork.onclick= async () => {
    
        let  promi= await fetch(`http://localhost:8080/works/start/${id}/${Number(sessionStorage.getItem("Ven_id"))}`,{
          method:"PUT"
        })
        let data=await promi.json()
          window.alert("Your Work Started now")
        section.style.display="none"

  }
}

//-----------------------ending working--------------------------
let endWork=document.getElementById("work_end")
  endWork.addEventListener('click',()=>{
    section.style.display="none"
    work_table.style.display='none'
    drop_setion.style.display="block"
    demo1()
  })
 async function  demo1(){
  let promi=await fetch(`http://localhost:8080/works/${Number(sessionStorage.getItem("Ven_id"))}`)
      let data=await promi.json()
     //  console.log(data);
     let dropdown=document.getElementById("dropdown")
     dropdown.style.left="54%"
     dropdown.style.top = "45px"

     while(dropdown.firstChild){
      dropdown.removeChild(dropdown.firstChild)
     }
   
     
      data.data.map((a)=>{
         
            if(a.startDate!==null&&a.endDate===null){
             if(a.vendor.id===Number(sessionStorage.getItem("Ven_id"))){
              let li=document.createElement("li")
              li.setAttribute("id",`${a.id}`)
              
             li.textContent=a.typeOfWork
            
             dropdown.appendChild(li)
            
             }

            }
      })

let liElements=document.querySelectorAll("#dropdown li")

  liElements.forEach((li)=>{
    li.addEventListener('click',()=>{
       
      pendingwork(Number(li.id))
     
    })
    
  })
  if(dropdown.children.length===0){
    window.alert("NO Pending Works")
  }
 }

async function pendingwork(id){
  let promi= await fetch(`http://localhost:8080/works/${Number(sessionStorage.getItem("Ven_id"))}/${id}`)
  let data=await promi.json()
   
    
    section.style.display="block"
    drop_setion.style.display="none"
    let cus_section=document.getElementById("cus_section")
    while(cus_section.firstChild){
     cus_section.removeChild(cus_section.firstChild)
    }
    //customerName
     let customerName=document.createElement("h1")
      customerName.textContent=`CustName:${data.data.customer.name}`
      cus_section.appendChild(customerName)
      //phone
     let phone=document.createElement("h1");
     phone.textContent=`CustomerPhno:${data.data.customer.phone}`
     cus_section.appendChild(phone)
     //workName
     let workName=document.createElement("h1")
     workName.textContent=`WorkName:${data.data.typeOfWork}`
     cus_section.appendChild(workName)
     //place
     let place=document.createElement("h1")
     place.textContent=`Place:${data.data.address.landMark}`
     cus_section.appendChild(place)
     //pincode
     let pincode=document.createElement("h1")
     pincode.textContent=`pincode:${data.data.address.pincode}`
     cus_section.appendChild(pincode)
     let endwork=document.createElement('h1')
     endwork.textContent="EndWork"
     endwork.setAttribute("id","endwork")
     cus_section.appendChild(endwork)
     
   endwork.onclick= async () => {
     
         let  promi= await fetch(`http://localhost:8080/works/end/${id}/${Number(sessionStorage.getItem("Ven_id"))}`,{
           method:"PUT"
         })
         let data=await promi.json()
            console.log(data.data.id);
        //  let promi1=await fetch(`http://localhost:8080/cost/${data.data.id}/${Number(sessionStorage.getItem("Ven_id"))}`,{
        //   method:"POST",
          
        // })
        // let data1=await promi1.json()
       
           window.alert("Yours work successfully completed")
         section.style.display="none"
 
   }
 }

 //---------------------------work status----------------------
 let workstatus=document.getElementById("work_status")
 workstatus.addEventListener('click',async ()=>{
  section.style.display='none'
    drop_setion.style.display="none"
    work_table.style.display='block'
    let table=document.getElementById("table")
    table.setAttribute("cellpadding","30px")
      while(table.children.length>1){
        table.removeChild(table.lastChild)
      }
    let promi=await fetch(`http://localhost:8080/works/${Number(sessionStorage.getItem("Ven_id"))}`)
    let data=await promi.json()
         
         data.data.map((work)=>{
            if(work.vendor!=null){
             if(work.vendor.id===Number(sessionStorage.getItem("Ven_id"))){
               console.log(work);
              let row=document.createElement('tr')
              table.appendChild(row)
              let workname=document.createElement('td')
              workname.textContent=work.typeOfWork
              row.appendChild(workname)
              let startDate=document.createElement('td')
              startDate.textContent=work.startDate
              row.appendChild(startDate)
              let endDate=document.createElement('td')
               endDate.textContent=work.endDate
                row.appendChild(endDate)
                if(work.cost!==null){
                  let totalAmount=document.createElement('td');
                    totalAmount.textContent=work.cost.totalAmount
                    row.appendChild(totalAmount)
                    
                    let mode=document.createElement('td');
                    mode.textContent=work.cost.mode
                    row.appendChild(mode)
                    console.log("hello");
                }else if(work.endDate===null){
               
                  let totalAmount=document.createElement('td');
                
                  row.appendChild(totalAmount)
                  
                  let mode=document.createElement('td');
                 
                  row.appendChild(mode)
                }else{
                
                  let totalAmount=document.createElement('td');
                
                  row.appendChild(totalAmount)
                  
                  let mode=document.createElement('td');
                 
                  row.appendChild(mode)
                }
                

             }
            }
         })
    
    
 })  
 //-----------------------------------cost Generation----------------------------
 let cost=document.getElementById("cost")
 cost.addEventListener("click",()=>{
  section.style.display="none"
    work_table.style.display='none'
    drop_setion.style.display="block"
    console.log("hello");
    demo2()

 })
  async function  demo2(){
    let promi=await fetch(`http://localhost:8080/works/${Number(sessionStorage.getItem("Ven_id"))}`)
    let data=await promi.json()
    let dropdown=document.getElementById("dropdown")
     dropdown.style.left="69%"
     dropdown.style.top = "45px"

     while(dropdown.firstChild){
      dropdown.removeChild(dropdown.firstChild)
     }
     data.data.map((a)=>{
         
      if(a.startDate!==null&&a.endDate!==null){
        if(a.vendor!==null){
          if(a.cost==null){
       if(a.vendor.id===Number(sessionStorage.getItem("Ven_id"))){
        let li=document.createElement("li")
        li.setAttribute("id",`${a.id}`)
        
       li.textContent=a.typeOfWork
      
       dropdown.appendChild(li)
       }
       }
      }
      }
})

let liElements=document.querySelectorAll("#dropdown li")

liElements.forEach((li)=>{
li.addEventListener('click',()=>{

  costGeneration(Number(li.id))
  

})

})
  if(dropdown.children.length===0){
    window.alert("No Completed works ")
  }
   }


 async function costGeneration(id){
  let promi= await fetch(`http://localhost:8080/works/${Number(sessionStorage.getItem("Ven_id"))}/${id}`)
  let data=await promi.json()
   
    
    section.style.display="block"
    drop_setion.style.display="none"
    let cus_section=document.getElementById("cus_section")
    while(cus_section.firstChild){
     cus_section.removeChild(cus_section.firstChild)
    }
    //customerName
    let customerName=document.createElement("h1")
    customerName.textContent=`CustName:${data.data.customer.name}`
    cus_section.appendChild(customerName)
    //phone
   let phone=document.createElement("h1");
   phone.textContent=`CustomerPhno:${data.data.customer.phone}`
   cus_section.appendChild(phone)
   //workName
   let workName=document.createElement("h1")
   workName.textContent=`WorkName:${data.data.typeOfWork}`
   cus_section.appendChild(workName)
   //start work
   let startwork=document.createElement("h1")
    startwork.textContent=`Starting Date:${data.data.startDate}`
    cus_section.appendChild(startwork)
    //end work
    let endwork=document.createElement("h1")
    endwork.textContent=`Ending Date:${data.data.endDate}`
    cus_section.appendChild(endwork)
     // cost button
     let cost_btn=document.createElement("h1")
     cost_btn.setAttribute("id","cost-btn")
      cost_btn.textContent="Cost"
      cus_section.appendChild(cost_btn)
      cost_btn.onclick=async ()=>{
        console.log(id);
         let promi1=await fetch(`http://localhost:8080/cost/${id}/${Number(sessionStorage.getItem("Ven_id"))}`,{
          method:"POST",
          
        })
        let data1=await promi1.json()
         console.log(data1);
         window.alert("Cost Generation Successfully")

         section.style.display="none"
      }


  }

  //-----------------------------logout-----------------------
  let  logOut=document.getElementById("logout")
  logOut.addEventListener('click',()=>{
   sessionStorage.removeItem("Ven_id")
   //window.location.href ="./index.html"
   window.open("./index.html","_self")
  })