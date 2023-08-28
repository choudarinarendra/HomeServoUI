let form=document.getElementById("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    let email=document.getElementById("email_field").value
    let password=document.getElementById("password_field").value
  login(email,password)
})
let login=async (email,password)=>{
  let promi =await fetch(`http://localhost:8080/vendors/login?email=${email}&password=${password}`)
  let data1=await promi.json();
    console.log(data1);
 if(typeof data1.data==="string"){
    
    
   if(data1.data===("Enter currect Email")){
     document.getElementById("email_field").style.border="2px solid red"
   
    
   }else{
    document.getElementById("email_field").style.border=""
   }
    if((data1.data)===("Enter currect password")){
    document.getElementById("password_field").style.border="2px solid red"
    
   }else{
    document.getElementById("password_field").style.border=""
   }

 }else{
      if(data1.data.email===email&&data1.data.password===password){
        sessionStorage.setItem("Ven_id",data1.data.id)
        window.open("http://127.0.0.1:5500/vendorpage.html","_self")
      }
 }
}
