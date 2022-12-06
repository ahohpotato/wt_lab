let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
for (let i = 1; i <= 10; i++) {
if (i == 1) div1.innerText = "Gold Medal" + "\n";
else if (i == 2) div2.innerText = "Silver Medal" + "\n";
else if (i == 3) div3.innerText = "Bronze Medal" + "\n";
else div4.innerText += i + "\n";
}