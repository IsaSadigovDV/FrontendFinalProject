const createInputs=document.querySelectorAll(".inputs>input");
const vali1=document.querySelector(".vali1")
const vali2=document.querySelector(".vali2")
const vali3=document.querySelector(".vali3")
const vali4=document.querySelector(".vali4")

createInputs[0].addEventListener("keyup",()=>{
    if(createInputs[0].value.trim()===null){
        vali1.textContent="Plese enter username correctly";
        vali1.style.color="red";
    }
})
createInputs[1].addEventListener("keyup",()=>{
    if(!ValidateEmail(createInputs[1].value)){
        vali2.textContent="Please enter valid email";
        vali2.style.color="red";
    }
})
createInputs[2].addEventListener("keyup",()=>{
    
    
})
createInputs[3].addEventListener("keyup",()=>{
   
})







function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}