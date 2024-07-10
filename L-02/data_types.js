const people = ["Aaron","Mel","John"];
const one = 1;
const str ="Hello World";
const b = true;
const employee = {
    firstName: "Anirach",
    lastName: "Mingkhwan",
};

function sayHelo(person) {
    console.log("Hello" + person.firstName);
}

console.log(typeof people)
console.log(typeof sayHelo)
console.log(employee instanceof Array);
sayHelo(employee);