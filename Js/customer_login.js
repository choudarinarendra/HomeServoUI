let form=document.getElementById("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    let email=document.getElementById("email_field").value
    let password=document.getElementById("password_field").value
  login(email,password)
})
let login=async (email,password)=>{
  let data =await fetch(`http://localhost:8080/customers/login?email=${email}&password=${password}`)
  let data1=await data.json();
 
 if(typeof data1.data==="string"){
    console.log(typeof data1.data);
    
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
  console.log(data1);
  console.log(data1.data.email);
  console.log(email);
  console.log(password);
  console.log(data1.data.password);
  if(data1.data.email===email&&data1.data.password===password){
    sessionStorage.setItem("cust_id",data1.data.id)
    console.log("hello");
    
    
    window.open("http://127.0.0.1:5500/customerPage.html","_self")
  }else{
    console.log("else working");
  }
 }
}
