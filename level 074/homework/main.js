let button = document.getElementById("changeTextBtn");
let paragraph = document.getElementById("text");
button.addEventListener("click", function () {
    paragraph.textContent = "text";
});

// ?

let addBtn = document.getElementById("addBtn");
let nameInput = document.getElementById("nameInput");
let nameList = document.getElementById("nameList");
addBtn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.textContent = nameInput.value;
nameList.appendChild(li);
});

// ?

let colors = ["red", "blue", "black", "orange", "ehite"];
let index = 0;
document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];
    index++;
    if (index === colors.length);
});

// ?

let tasks = [];
document.getElementById("addTask").addEventListener("click", function () {
    let taskText = document.getElementById("taskInput").value;

    let li = document.createElement("li");
    li.textContent = taskText;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
});