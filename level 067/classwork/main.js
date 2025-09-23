// function onFormSubmit(e) {
//     e.preventDefault();
//     let form = document.getElementById("mainform");
//     let name = form.elements.name.value;
//     let surname = form.elements.surname.value;
//     let password = form.elements.password.value;

//     console.log(name, surname, password)
// }

let userInfo = {
    name: "Lizi",
    surname: "Mchedlidze",
    Academy: "GOA",
    role: "Pupil",
    city: "Tbilisi",
    favColor: "Black",
    favLanguage: "Georgian",
}
    welcome(){
        console.log(this.name + this.surname)
    }

console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo.name);
userInfo.name = "Lizz"
console.log(userInfo)

userInfo.welcome()