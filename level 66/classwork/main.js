// 1
function concStrings() {
    let firstInput = prompt("Eter First text: ");
    let secondInput = prompt("Enter Second Text: ");
    let result = firstInput + secondInput;
    console.log(result)
}

// 2
function compareStrings() {
    let word1 = prompt("Enter word: ");
    let word2 = prompt("Enter second word: ");
    console.log(word1 == word2);
    console.log(word1 === word2);
}

compareStrings()

// 3
function compareNums(num1, num2) {
    console.log(num1 == num2)
    console.log(num1 === num2)
    console.log(num1 >= num2)
    console.log(num1 > num2)
    console.log(num1 < num2)
    console.log(num1 <= num2)
    console.log(num1 != num2)
    console.log(num1 !== num2)
}

compareNums(2311, 932)
compareNums(453, 8263)
compareNums(203, 203)