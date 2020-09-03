"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My Name is ${this.name}. I am ${this.age}`);
        this.explainJob();
    }
}
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`Teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error("There is no subject.");
        }
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    greeting() {
        console.log(`Hello! My Name is ${this.name}. I am ${this.age}. ${this.subject} teacher`);
    }
}
const teacher = new Teacher("Quill", 38, "Math");
teacher.subject;
console.log(Person.isAdult(7));
