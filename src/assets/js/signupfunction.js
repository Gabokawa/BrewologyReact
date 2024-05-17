const emailfield = document.getElementById("emailfield");
const pwordfield = document.getElementById("pwordfield");
const signupbtn = document.getElementById("signupbutton");
const modal = document.querySelector("#signupmodal");
const emailstring = document.querySelector("#emailstring");
const pwordstring = document.querySelector("#pwordstring");
const overlay = document.querySelector(".overlay");


function showmodal() {
    var email = document.getElementById("emailfield").value;
    var password = document.getElementById("pwordfield").value;
    if (email == "") { email = "null"}
    if (password == "") { password = "null"}

    emailstring.textContent = "Email: " + email;
    pwordstring.textContent = "Password: " + password;


    modal.classList.add("shown");
    overlay.style.display = "block";
}

function hidemodal() {
    modal.classList.remove("shown");
    overlay.style.display = "none";
}

function handleSignupClick() {
    console.log("showing modal");
    showmodal();
}

signupbtn.addEventListener("click",handleSignupClick);
modal.addEventListener("click", hidemodal);
overlay.addEventListener("click", hidemodal);

