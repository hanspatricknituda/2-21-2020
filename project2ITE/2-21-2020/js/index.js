// inheritance

class Person {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }

    walk(distance){
        console.log(`${this.name} can walk up to ${distance} kilometers`)
    }
}

class Student extends Person {
    constructor(name, gender, school){
        super(name, gender)
        this.school = school
    }

    study(subject){
        console.log(`${this.name} is now studying ${subject}`)
    }
}

let p1 = new Person("Juan Dela Cruz", "Male")
let s1 = new Student("Rocky Morales", "Male", "UST")

p1.walk(21)
s1.walk(31)
s1.study("GMRC")

