

let user = document.getElementById("user")
let logUp = document.getElementById("logUp")
let logout = document.getElementById("logout")

if (localStorage.getItem("Name")) {
    user.innerHTML = localStorage.getItem("Name")
    logUp.style.display = "none"
    logout.style.display = "flex"

}

logout.addEventListener("click", () => {
    localStorage.clear()
    setTimeout(() => {
        window.location = "login.html"

    }, 1500);
})




