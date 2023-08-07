
const myList = document.getElementById("task-container");
const inputtext = document.getElementById("input_text")
const paragraph = document.getElementById("append")
let trash = document.createElement("p");
function addtask() {
   if (inputtext.value === "") {
      alert("you must write something")
   }
   else {
      let trash = document.createElement("p");
      let li = document.createElement("li")
      trash.innerHTML = "🗑️"
      li.innerHTML = inputtext.value;
      myList.appendChild(li)
      li.appendChild(trash)
      inputtext.value = ""
      saveData();
   }

}
myList.addEventListener("click", function (e) {
   if (e.target.tagName === "P") {

      e.target.parentElement.remove()
      saveData();
   }
})
window.addEventListener("keydown", function (k) {
   if (k.key === "Enter") {
      addtask();
   }
})

let i = 0;
setInterval(rotation, 100);
function rotation() {
   let todo = document.getElementById("todo")
   todo.style.background = "linear-gradient(" + i + "deg, rgb(206 24 84 / 70%) 11.2%, rgb(247 203 0 / 78%) 91.1%)";
   i += 5;
   if (i == 9100) {
      i = 0;
   }
}
function saveData() {
   localStorage.setItem("todo-data", myList.innerHTML)
}
function showData() {
   myList.innerHTML = localStorage.getItem("todo-data");
}
showData()