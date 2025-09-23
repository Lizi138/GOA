function generateParagraph() {
    let div = document.getElementById("div1");
    let paragraph = document.createElement("p");
    paragraph.textContent = "javascript";

    div.appendChild(paragraph);
}

generateParagraph();


function removeChildElement() {
    let parentDiv = document.getElementById("mainDiv");
    let childDiv = document.getElementById("child-div");

    parentDiv.removeChild(childDiv);

}

function replaceElements() {
    let parent = document.getElementById("parent-div");
    let childP = document.getElementById("main-p");
    let oldParagraph = parent.getElementById("p");
    childP.textContent = "Hello"
    let newParagraph = document.createElement("p");

    parent.replaceChild(newParagraph, oldParagraph);
}

replaceElements()