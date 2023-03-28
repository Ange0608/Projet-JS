const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

function addTodo() {
  const newTodo = document.createElement("li");
  const todoText = document.createTextNode(todoInput.value);
  const deleteButton = document.createElement("button");
  const deleteText = document.createTextNode("Supprimer");
  deleteButton.appendChild(deleteText);
  deleteButton.addEventListener("click", function() {
    todoList.removeChild(newTodo);
  });
  newTodo.appendChild(todoText);
  newTodo.appendChild(deleteButton);
  todoList.appendChild(newTodo);
  todoInput.value = "";
}
