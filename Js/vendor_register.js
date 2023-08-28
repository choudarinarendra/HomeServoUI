let form=document.getElementById("form");

let success_confm={
    name:false,
    email:false,
    phone:false,
    password:false,
    con_pass:false,
    pincode:false,
    cost:false

}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
let formdata=new FormData(form)
let obj=Object.fromEntries(formdata)
 console.log(obj.costPerDay);
 console.log("hello");
nameVali(obj.name)
phoneVeli(obj.phoneNo)
emailVali(obj.email)
passwordVali(obj.password)
con_passVali(obj.password,obj.confirm_password)
pincodeVali(obj.pincode)
cost(Number(obj.costPerDay))
let result=!Object.values(success_confm).includes(false)
if(result){
    console.log("successfully register");
    let cust_obj={
        email:obj.email,
        costPerDay:Number(obj.costPerDay),
        name:obj.name,
        role:obj.role,
        phoneNo:Number(obj.phoneNo),
        password:obj.password,
        address:{
            d_No:obj.d_No,
            district:obj.district,
            landMark:obj.landMark,
            pincode:Number(obj.pincode),
            state:obj.state,
            street:obj.street
        }
        
    }
    
    register(cust_obj)
}

})
   async function register(obj){
    
     let promi = await fetch("http://localhost:8080/vendors",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)

       })
       let data=await promi.json()
       console.log(data);
       if(typeof data.data==="string"){
        let email_err=document.getElementById("err_email")
        email_err.textContent="Already exist in your email"
        email_err.style.color="red"
       }else{
        document.getElementById("suss-mess").style.display="block"
        document.getElementById("name").value=""
        document.getElementById("phoneNo").value=""
        document.getElementById("email").value=""
        document.getElementById("password").value=""
        document.getElementById("costPerDay").value=""
        document.getElementById("d_No").value=""
        document.getElementById("street").value=""
        document.getElementById("landMark").value=""
        document.getElementById("pincode").value=""
        document.getElementById("district").value=""
        document.getElementById("state").value=""
        document.getElementById("role").value=""
        document.getElementById("confirm_password").value=""
       }
   }
function nameVali(name){
    let name_err=document.getElementById("err_name")
 if(name.length<=5){
   
    name_err.textContent="Name should have minimum 5 character"
    name_err.style.color=" red"
    success_confm.name=false
}else{
    name_err.style.color=""
    name_err.textContent="Name"
    success_confm.name=true
}
}
function phoneVeli(phone){
    let length_err=document.getElementById("err_phone")
    if(phone.length!=10){
        success_confm.phone=false
     length_err.textContent="phone Number should be 10 Digits"
     length_err.style.color="red"
    }else{
       success_confm.phone=true
       length_err.style.color=""
       length_err.textContent="Phone"
    }
}
function emailVali(email){
let email_err=document.getElementById("err_email")

if(email.endsWith("@gmail.com")){
    success_confm.email=true
    email_err.textContent="Email"
    email_err.style.color=""
}else{
    email_err.textContent="Enter proper Email"
    email_err.style.color="red"
    success_confm.email=false

}
}
function passwordVali(password){
    let pass_err=document.getElementById("err_password");
    //let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (password.length < 8) {
        pass_err.textContent="Your password must be at least 8 characters"
        pass_err.style.color="red"
        success_confm.password=false
    }
   else if (password.search(/[a-z]/) < 0) {
        pass_err.textContent="Your password must contain at least one lowercase letter."
        pass_err.style.color="red"
        success_confm.password=false
    }
    else if(password.search(/[A-Z]/) < 0){
    pass_err.style.color="red"
    success_confm.password=false
    }
   else if (password.search(/[0-9]/) < 0) {
        pass_err.textContent="Your password must contain at least one digit"
        pass_err.style.color="red"
        success_confm.password=false
    }else{
          formpass_vali=true
          success_confm.password=true
          pass_err.textContent="Password"
          pass_err.style.color=""

    }
    
}
function con_passVali(pass,con_firm){
    let  con_passErr=document.getElementById("err_conPass")
    if(pass===con_firm){
        success_confm.con_pass=true
        con_passErr.textContent="Confirm password"
      con_passErr.style.color=""
    }else{
      con_passErr.textContent="your password is not matched"
      con_passErr.style.color="red"
      success_confm.con_pass=false
    }
}
function pincodeVali(pincode){
    let pincode_Err=document.getElementById("err_Zipcode")
    if(pincode.length===6){
    success_confm.pincode=true
    pincode_Err.textContent="PinCode"
    pincode_Err.style.color=""
    }else{
        pincode_Err.textContent="must be 6 Digits"
        pincode_Err.style.color="red"
        success_confm.pincode=false
    }
}
function cost(costv){
    console.log(typeof costv);
    console.log(costv);
    let cost_Err=document.getElementById("err_cost")
    if(costv<0){
        cost_Err.textContent="Negative values Are not Allow"
        cost_Err.style.color="red"
        success_confm.cost=false
    }
    else{
        success_confm.cost=true
        cost_Err.textContent="CostPerDay"
        cost_Err.style.color=""
    }
}