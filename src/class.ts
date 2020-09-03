abstract class Person {
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }

  constructor(public name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My Name is ${this.name}. I am ${this.age}`);
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher extends Person {
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

  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  greeting() {
    console.log(
      `Hello! My Name is ${this.name}. I am ${this.age}. ${this.subject} teacher`
    );
  }
}

const teacher = new Teacher("Quill", 38, "Math");
teacher.subject;

console.log(Person.isAdult(7));
