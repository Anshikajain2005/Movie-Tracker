document.getElementById("getbtn").addEventListener("click",function(event){
  const user=document.getElementById("user").value;
  localStorage.getItem("user",user);
  localStorage.setItem("user",user);
  
 // let name=JSON.parse(localStorage.getItem('name'))||[]
 // name.push(user);
  //localStorage.setItem('name',JSON.stringify(name));
 document.getElementById("account").innerText=user;
})