// "use strict"

// const obj = {
//     a:1,
//     name: "Raju",
//     outer() {
//         console.log(this)
//         const getName = ()=>{
//         console.log(this)
//     }
//     getName()
// }
// }

// obj.outer()

// console.log(this)

const person = {
    name: "Kayden",
    greetPerson(greeting){
    return `Hello ${this.name}, ${greeting}`
    }
}

const person1 = {
    name: "Lokesh"
}


const person2 = {
    name: "Suraj"
}

console.log(person.greetPerson.call(person, "Evening"))
console.log(person.greetPerson.apply(person1, ["After-Noon"]))
console.log(person.greetPerson.bind(person2)("Good Morning"))
