const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // "X" symbol
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); // save data after adding a task
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData(); // save data after toggling a task
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData(); // save data after removing a task
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || ""; // handles null case (in case local storage is empty)
}
showTask();
