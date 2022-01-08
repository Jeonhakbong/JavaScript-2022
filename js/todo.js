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
  // recreate toDoArray except the item of which id equals to li.id
  toDoArray = toDoArray.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDo(); // run function one more time to save new array
}

function addtToDo(newToDoObj) {
  const toDoli = document.createElement("li");
  toDoli.id = newToDoObj.id;

  const toDoSpan = document.createElement("span");
  const button = document.createElement("button");

  toDoSpan.innerText = newToDoObj.text;
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

  // create object variables
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoArray.push(newToDoObj);
  addtToDo(newToDoObj); // show new todo on webpage
  saveToDo(); // save on localStorage
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDoArray = localStorage.getItem(TODOARRAY_KEY);

if (savedToDoArray) {
  // array is not null.
  // JSON.parse : string -> object/array
  const parsedToDoArray = JSON.parse(savedToDoArray);
  toDoArray = parsedToDoArray; // load previous array
  parsedToDoArray.forEach(addtToDo); // each item
}
