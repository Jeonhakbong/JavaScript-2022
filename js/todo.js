// variables
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDoArray = [];
const TODOARRAY_KEY = "toDoArray";

// functions
function saveToDo() {
  // JSON.stringify : object/array -> string
  localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function addtToDo(newToDo) {
  const toDoli = document.createElement("li");
  const toDoSpan = document.createElement("span");
  const button = document.createElement("button");

  toDoSpan.innerText = newToDo;
  button.innerText = "❌";

  toDoli.appendChild(toDoSpan);
  toDoli.appendChild(button);
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(toDoli);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // submit 의 경우 새로고침이 되므로 이를 방지
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDoArray.push(newToDo);
  addtToDo(newToDo);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDoArray = localStorage.getItem(TODOARRAY_KEY);

if (savedToDoArray) {
  // array is not null.
  // JSON.parse : string -> object/arry
  const parsedToDoArray = JSON.parse(savedToDoArray);
  toDoArray = parsedToDoArray; // load previous array
  parsedToDoArray.forEach(addtToDo);
} else {
}
