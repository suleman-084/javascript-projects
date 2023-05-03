const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById("btn");

function addtask() {
  if (inputbox.value == "") {
    alert("write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
}
btn.addEventListener("click", addtask);

listContainer.addEventListener("click", function (e) {
  //   console.log(e);
  //   if (e.target.tagName === "LI") {
  //     e.target.classList.toggle("checked");
  //   } else {
  //     e.target.tagName === "span";
  //     e.target.parentElement.remove();
  // }
  e.target.parentElement.remove();
});
