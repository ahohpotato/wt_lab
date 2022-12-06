let btn = document.querySelector(".btn");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let div1 = document.querySelector("form div");
let div2 = document.querySelector("#div2");
let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
btn.addEventListener("click", clickBtn);
div1.classList.add("hidden");
div2.classList.add("hidden"); 
// console.log('')
function clickBtn(event) {
event.preventDefault();
if (nameInput.value != "" && emailInput.value != "") {
if (nameInput.value.length < 5) {
div1.innerText = "Atleast 5 characters needed";
common(div1); 
} else if (spChars.test(nameInput.value)) {
div1.textContent = "Special characters are not allowed";
common(div1);
} else if (/\d/.test(nameInput.value)) {
div1.textContent = "Numeric characters are not allowed";
common(div1);
} else if (pattern.test(emailInput.value) == false) {
div2.innerText = "Invalid email";
common(div2);
} else {
alert("Form submitted");
nameInput.value = "";
emailInput.value = "";
}
}
}
function common(e) {
e.style.textAlign = "center";
e.classList.remove("hidden"); 
e.classList.add("warnMessage");
setTimeout(() => {
e.classList.remove("warnMessage"), e.classList.add("hidden");
}, 3000);
}