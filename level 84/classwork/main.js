function case_choice(){
    let str1 = prompt("Enter a string: ");
    let str2 = prompt("Lowercase or Uppercase?");

    if (str2 === "lower" || str2 === "l"){
        console.log(str1.toLowerCase());
    } else if (str2 === "upper" || str2 === "u"){
        console.log(str1.toUpperCase());
    }
}

case_choice()

let stringMassive = ["old shoes", "red shirt", "girl", "boy", "new shoes"]

for (let sentence of stringMassive) {
    if(sentence.includes("new")) {
        console.log(sentence);
    }
}