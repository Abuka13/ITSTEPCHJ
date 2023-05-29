let input = document.getElementById("inputText");
let addBtn = document.getElementById("add-btn");
let list = document.getElementById("list");

let sortSelect = document.getElementById("sort");
let filSelect = document.getElementById("filter");

sortSelect.addEventListener("change", sorting);
filSelect.addEventListener("change", filtering);

let todoList = [];

async function getTodo() {
  const response = await fetch(
    "https://crudcrud.com/api/3e9c537349f44ae292de8ea806ba2caa"
  );
  todoList = await response.json();
  renderTodo();
}

getTodo();

function renderTodo(arr = todoList) {
  let tasks = "";
  arr.forEach((elem) => {
    tasks += `<li class="my-2 py-3 list-group-item" id="list">
        <div class="row">
          <div class="col-1">
            <input onchange="check('${
              elem._id
            }')" class="" type="checkbox" id="check" ${
      elem.checked ? "checked" : ""
    }/>
          </div>
          <div class="col-6">
            <span class="h5" id="text">${elem.text}</span>
          </div>
          <div class="col-4">
            <button onclick="del('${
              elem._id
            }')" class="btn btn-dark">Delete</button>
            <button onclick="edit('${
              elem._id
            }')" class="btn btn-dark">Edit</button>
          </div>
        </div>
      </li>`;
  });
  list.innerHTML = tasks;
}

addBtn.addEventListener("click", add);

async function add() {
  let newTodo = {
    text: input.value,
    checked: false,
  };
  await fetch("https://crudcrud.com/api/3e9c537349f44ae292de8ea806ba2caa", {
    headers: {"Content-type": "Application/json"},
    method: "POST",
    body: JSON.stringify(newTodo),
  });
  input.value = "";
  getTodo();
}

async function del(taskId) {
  await fetch(`https://crudcrud.com/api/3e9c537349f44ae292de8ea806ba2caa${taskId}`, {
    method: "DELETE",
  });
  getTodo();
}

async function edit(taskId) {
  let updatedText = prompt("Enter new text");
  const response = await fetch(
    "https://crudcrud.com/api/3e9c537349f44ae292de8ea806ba2caa"
  );
  const oldTodo = await response.json(); // {text: "", checked: false}
  let updatedTodo = {
    ...oldTodo,
    text: updatedText,
  }
  await fetch(`https://crudcrud.com/api/3e9c537349f44ae292de8ea806ba2caa${taskId}`, {
    headers: {"Content-type": "Application/json"},
    method: "PUT",
    body: JSON.stringify(updatedTodo),
  });
  getTodo();
}

async function check(taskId) {
  const response = await fetch(
    `https://crudcrud.com/api/3e9c537349f44ae292de8ea806ba2caa${taskId}`
  );
  const oldTodo = await response.json(); // {text: "", checked: false} !false
  let updatedChecked = !oldTodo.checked;
  console.log("old");
  console.log(oldTodo);
  let updatedTodo = {
    ...oldTodo,
    checked: updatedChecked,
  }
  console.log("up");
  console.log(updatedTodo);
  await fetch(`https://crudcrud.com/api/3e9c537349f44ae292de8ea806ba2caa${taskId}`, {
    headers: {"Content-type": "Application/json"},
    method: "PUT",
    body: JSON.stringify(updatedTodo),
  });
  getTodo();
}

function sorting(event) {
  // console.log(event.target.value);
  if (event.target.value === "2") {
    renderTodo([...todoList].sort((a, b) => a.text.localeCompare(b.text)));
  } else {
    renderTodo();
  }
}

function filtering(event) {
  if (event.target.value === "2") {
    renderTodo([...todoList].filter((todo) => todo.checked === true));
  } else if (event.target.value === "3") {
    renderTodo([...todoList].filter((todo) => todo.checked === false));
  } else {
    renderTodo();
  }
}