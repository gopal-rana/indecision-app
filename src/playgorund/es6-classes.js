
//ES6 classes
class Person {
  constructor(name='Anonymus', age=0){
    this.name = name;
    this.age = age;
  }
  getGreetings(){
    return `Hi, I am ${this.name}!`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person{
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += ` His major is ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person{
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getGreetings(){
    let greeting = super.getGreetings();
    if(this.hasHomeLocation()){
      greeting += ` I am visiting ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Student('Gopal', 31, 'Computer Science');
console.log(me.getGreetings());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreetings());
console.log(other.getDescription());

const meTraveller = new Traveller('Gopal', 31, 'Delhi');
console.log(meTraveller.getGreetings());
console.log(meTraveller.getDescription());

const otherTraveller = new Traveller();
console.log(otherTraveller.getGreetings());
console.log(otherTraveller.getDescription());
