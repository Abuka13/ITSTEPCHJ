let input = document.getElementById('inputText');
let list = document.getElementById('list');

// let input2 = document.getElementsByClassName('input');
// let els = document.getElementsByTagName('div');
// let qs = document.querySelector('input.check');
// let qsa = document.querySelectorAll('input.check');
// console.log(els);

let addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", add);
// add_btn.removeEventListener("click", add);

function add() {
    // let text = input.value;
    // console.log(text);
    let checkbox = document.createElement('input');
    let span = document.createElement('span');
    let text_node = document.createTextNode(input.value);
    // span.textContent = text_node;
    span.textContent = "dnfueif";
    // span.innerHTML = 
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    checkbox.setAttribute("type", "checkbox");
    // input.classList.add("");
    // input.style.backgroundColor = "red";

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

addBtn.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("menu");
})
// https://www.google.com/imgres?imgurl=https%3A%2F%2Fpictures.sports.ru%2F1ElPeaCi2uwsApA-sSRIK0wweFk_Gy4iGZPCDFSb9qU%2Ffill%2F400%2F400%2Fno%2F1%2FczM6Ly9zdGF0X3BpY3R1cmUvVEVBTS9tYWluL2FjX21pbGFuLnBuZw.png&imgrefurl=https%3A%2F%2Fwww.sports.ru%2Fmilan%2F&tbnid=uLOpbPvMcwOYEM&vet=12ahUKEwiZupHZxNr9AhWsmIsKHcFSBTQQMygHegUIARDFAQ..i&docid=E7kIB6Z06RBV2M&w=400&h=400&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%20%D0%BC%D0%B8%D0%BB%D0%B0%D0%BD%D0%B0&ved=2ahUKEwiZupHZxNr9AhWsmIsKHcFSBTQQMygHegUIARDFAQ