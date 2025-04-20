function main() {
  class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    speak() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }

  class Student {
    constructor(person, major, gpa) {
      this.person = person;
      this.major = major;
      this.gpa = gpa;
    }

    study() {
      console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
    }

    speak() {
      console.log(
        `Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`
      );
    }
  }
  return { Person, Student };
}

const { Person, Student } = main();
const john = new Person("John", 25, "Male");
john.speak();
// Output: Hello, my name is John and I am 25 years old.

const studentJohn = new Student(john, "Computer Science", 3.8);
studentJohn.study();
// Output: I am studying Computer Science and my GPA is 3.8.

studentJohn.speak();
// Output: Hello, my name is John and I am 25 years old. I am also a student studying Computer Science.
