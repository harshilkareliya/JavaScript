let signup = document.getElementById("signup")
   
   signup.addEventListener("submit",function(event){
   event.preventDefault()
   
   let username = document.getElementById("username").value
   let email = document.getElementById("email").value
   let pass = document.getElementById("pass").value
//    var repass = document.getElementById("repass").value
   let web1storage = JSON.parse(localStorage.getItem("webpage1")) || []
   
   web1storage.push({username,email,pass})
   
   localStorage.setItem("webpage1",JSON.stringify(web1storage))
   
})
