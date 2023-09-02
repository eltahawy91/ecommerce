// reg
let Name = document.getElementById("name")
let Pass = document.getElementById("Password")
let Confirm = document.getElementById("Confirm")
let SignupBtn = document.getElementById("Signup")

SignupBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (Name.value == "" || Pass.value == "" || Confirm.value == "") {
        alert("please enter data in field")
    }
    else {
        localStorage.setItem("Name", Name.value);
        localStorage.setItem("Password", Pass.value);
        localStorage.setItem("Confirm", Confirm.value);
        if (localStorage.getItem("Password") == localStorage.getItem("Confirm")) {
            setTimeout(() => {

                window.location = "login.html"
            }, 1500)
        } else {
            alert("password is different")
        }

    }
})






//animation login and register
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

