const selectBox = document.querySelector("#select-box");
const listBtn = selectBox.querySelector("#list-show-btn");
const searchBtn = selectBox.querySelector("#search-show-btn");

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const searchForm = document.querySelector("#search-form");

const HIDDEN_CLASS = "hidden";

function showTodoList(event) {
  event.preventDefault();
  todoForm.classList.remove(HIDDEN_CLASS);
  todoList.classList.remove(HIDDEN_CLASS);
  searchForm.classList.add(HIDDEN_CLASS);
}

function showSearchForm(event) {
  event.preventDefault();
  todoForm.classList.add(HIDDEN_CLASS);
  todoList.classList.add(HIDDEN_CLASS);
  searchForm.classList.remove(HIDDEN_CLASS);
}

listBtn.addEventListener("click", showTodoList);
searchBtn.addEventListener("click", showSearchForm);
