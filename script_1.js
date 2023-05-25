//2.1.1. Bonjour
console.log("Bonjour monde");

//2.1.2. Salut
let answer;
let word = "";
while (true) {
    answer = prompt("Quel est ton prénom ?");
    if (answer) {
        word += answer;
    } else {
        break;
    }
}
console.log(`Bonjour, ${word} !`);