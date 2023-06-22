let signupBtn = document.getElementById("signupBtn")
let signinBtn = document.getElementById("signinBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")


signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";   //dit zorgt ervoor dat de name field weggaat als je op sign in klikt//
    title.innerHTML = "Sign In";       // en als je op sign in klikt dan krijgt die een kleur en ga je naar die page//
    signupBtn.classList.add("disable");   
    signinBtn.classList.remove("disable"); 
}

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

// window.localStorage.setItem('Name', 'Jameel'); //Slaat Name op als Jameel
// window.localStorage.setItem('Email', 'jameel.mezas1@gmail.com'); //Slaat Email op als jameel.mezas1@gmail.com
// window.localStorage.setItem('Password', 'MBO'); //Slaat password op als MBO
// function loginFunction() {
//     event.preventDefault()
    
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let result = document.getElementById('result');
    
//     let user = localStorage.getItem(name);
//     let data = JSON.parse(user);
//     console.log(data);
// }
