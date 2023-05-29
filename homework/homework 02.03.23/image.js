let inpt = document.getElementById("inputText");
let addBtn = document.getElementById("add-btn");
let list = document.getElementById("list");
let deleteElement = document.querySelector(".col-12");
let sortSelect = document.getElementById("sort");
let filSelect = document.getElementById("filter");

sortSelect.addEventListener("change", sorting);
filSelect.addEventListener("change", filtering);

let todoList = [
  // {id: 1, text: 'task1', checked: false},
  // {id: 2, text: 'task2', checked: true},
  // {id: 3, text: 'task3', checked: false},
];

if (localStorage.getItem("todolist2")) {
  todoList = JSON.parse(localStorage.getItem("todolist2"));
  renderTodo();
}

// renderTodo();
function renderTodo(arr = todoList) {
  let tasks = "";
  arr.forEach((elem) => {
    tasks += `<li class="my-2 py-3 list-group-item" id="list">
        <div class="row">
          <div class="col-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPByNSgHJFr5FnBrm0bqASVjfHsRg_dghyeQ&usqp=CAU",alt="">
          </div>
          <div class="col-4">
            <button onclick="del(${
              elem.id
            })" class="btn btn-dark">Delete</button>
            
          </div>
          
        </div>
      </li>`;
  });
  list.innerHTML = tasks;
  localStorage.setItem("todolist2", JSON.stringify(todoList));
}

addBtn.addEventListener("click", add);

function add() {
  let newTodo = {
    id: Date.now(),
    text: inpt.value,
    checked: false,
  };
  

  todoList.push(newTodo);
  inpt.value = "";
  renderTodo();
}

function del(taskId) {
    todoList = todoList.filter((elem) => elem.id !== taskId);
    renderTodo();
}



function check(taskId) {
  let checkTask = todoList.filter((elem) => elem.id === taskId)[0]; // [{}][0]
  checkTask.checked = !checkTask.checked;
  renderTodo();
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
    renderTodo([...todoList].filter(todo => todo.checked === true));
  } else if (event.target.value === "3") {
    renderTodo([...todoList].filter(todo => todo.checked === false));
  }
  else {
    renderTodo();
  }
}

function deleteItems() {
    list.innerHTML = "";
   
}