let newP = document.createElement("p");
newP.textContent = "This is a new paragraph.";
document.body.appendChild(newP);

let newH1 = document.createElement("h1");
newH1.textContent = "This is an H1 Title";
document.getElementById("container").appendChild(newH1);

let img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
document.body.appendChild(img);

let button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

let ul = document.createElement("ul");
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        ul.appendChild(li);
    }
document.body.appendChild(ul);

let contentDiv = document.getElementById("content");
    if (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

let list = document.createElement("ul");
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = "helo";
        list.appendChild(li);
    }
document.body.appendChild(list);
list.removeChild(list.lastChild);

let textDiv = document.getElementById("textContainer");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph replaced the old one.";
textDiv.replaceChild(newParagraph, textDiv);

let buttonDiv = document.getElementById("buttonContainer");
let newSpan = document.createElement("span");
newSpan.textContent = "Replaced Button";
let oldButton = buttonDiv("button");
buttonDiv.replaceChild(newSpan, oldButton);

let singleList = document.getElementById("singleItemList");
let newLI = document.createElement("li");
newLI.textContent = "New Item";
singleList.replaceChild(newLI, singleList);

let headingDiv = document.getElementById("headingReplace");
let newHeading = document.createElement("h1");
newHeading.textContent = "This is the new heading";
headingDiv.replaceChild(newHeading, headingDiv);

