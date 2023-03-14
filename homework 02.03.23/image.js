let addBtn = document.getElementById("add-btn");
let image = document.getElementById("image");
addBtn.addEventListener("click", add);
function add() {
    let checkbox = document.createElement('input');
    let span = document.createElement('image');
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    checkbox.setAttribute("type", "checkbox");
    if (text_node !== "") {
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
    input.value = "";
    deleteBtn.addEventListener("click", del);
}

function del() {
    this.parentNode.remove();
}
let clear = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clear);
function clear() {
    this.parentNode.remove();
}
addBtn.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("menu");
});

