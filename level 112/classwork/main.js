// export const myFunc = num => {
//     return num * num
// }

// const paragraph = document.getElementById("main-p");
// const inp = localStorage.getItem("word");

// if (inp) {
//     paragraph.textContent = inp;
// } else {

// const inp2 = prompt("ENter:");
// if (inp2) {
//     localStorage.setItem("word", inp2);
//     paragraph.textContent = inp2;
//     } else {
//     paragraph.textContent = "nth";
// }
// }

const userName = document.getElementById("in1");
const userEmail = document.getElementById("in2");

const nameS = localStorage.getItem("name");
const emailS = localStorage.getItem("email");

userEmail.addEventListener("submit", e => {
    e.preventDefault();

    localStorage.setItem("name");
    localStorage.setItem("email");
})