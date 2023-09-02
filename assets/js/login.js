// login
let logName = document.getElementById("logName")
let logPass = document.getElementById("logPass")

// //reg
// let Email = document.getElementById("email")
// let Pass = document.getElementById("Password")
// let Confirm = document.getElementById("Confirm")

//get data from storage
let getName = localStorage.getItem("Name")
let getPass = localStorage.getItem("Password")


//login btn
let Login = document.getElementById("Login")
Login.addEventListener("click", (e) => {
    e.preventDefault()
    if (logName.value == "" || logPass.value == "") {
        alert("please enter data in field")
    } else
        if (getName &&
            getName.trim() === logName.value.trim() &&
            getPass &&
            getPass === logPass.value.trim()) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1500)

        }
        else {
            alert("enter valied name and password")

        }

})


let user = document.getElementById("user")
let logUp = document.getElementById("logUp")
let logout = document.getElementById("logout")

if(localStorage.getItem("Name")){
    user.innerHTML=localStorage.getItem("Name")
    logUp.style.display="none"
    logout.style.display="flex"

}





// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// signupBtn.onclick = (() => {
//     loginForm.style.marginLeft = "-50%";
//     loginText.style.marginLeft = "-50%";
// });
// loginBtn.onclick = (() => {
//     loginForm.style.marginLeft = "0%";
//     loginText.style.marginLeft = "0%";
// });
// signupLink.onclick = (() => {
//     signupBtn.click();
//     return false;
// });

