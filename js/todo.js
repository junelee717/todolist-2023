const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerHTML = `<i class="fa fa-check"></i>` + newTodo.text;
    const button = document.createElement("button");
    button.innerHTML = `<i class="fa fa-trash"></i>`;
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parseTodos = JSON.parse(savedTodos);
    todos = parseTodos;
    parseTodos.forEach(paintTodo);
}
