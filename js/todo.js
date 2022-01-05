// variables
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

// functions
function addtToDo(newToDo) {
  const toDoli = document.createElement("li");
  const toDoSpan = document.createElement("span");

  toDoSpan.innerText = newToDo;
  toDoli.appendChild(toDoSpan);
  toDoList.appendChild(toDoli);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // submit 의 경우 새로고침이 되므로 이를 방지
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  addtToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
