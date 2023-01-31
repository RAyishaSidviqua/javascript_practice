var buttons = document.getElementById("buttons");
var li = buttons.querySelectorAll("li");
var result = document.getElementById("result");
console.log("list", li);

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    // alert(this.innerHTML)
    if (this.innerHTML == "=") {
      result.innerHTML = eval(result.innerHTML);
    }
    // *********************clear code*********************88
    else if (this.innerHTML == "c") {
      result.innerHTML = "";
    } else {
      result.innerHTML += this.innerHTML;
    }
  });
}
