// example of a class

class Person {
    constructor (fName, lName){
        this.fName = fName
        this.lName = lName
    }

    fullName() {
        return `${this.fName} ${this.lName}`
    }
    static myStatic(){
        console.log("Static Function")
    }
}

let person = new Person ("Youko", "Misawa")

console.log(person.fullName())
// calling a static

Person.myStatic()

//constructor function example

function OtherPerson(fName, lName) {
    this.fName = fName
    this.lName = lName
}

OtherPerson.prototype.fullName = function () {return `${this.fName} ${this.lName}`}
OtherPerson.myStatic = function () {console.log("FF Static Funtion")}
let otherPerson = new OtherPerson("Wataru", "Kozuki")
console.log(otherPerson.fullName())
OtherPerson.myStatic()