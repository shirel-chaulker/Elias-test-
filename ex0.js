class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName; // print all properties
    this.age = age;
  }
  fullName() {
    console.log(this);
  }
}
let shirel = new person("shirel", "chaulker", 23);
shirel.fullName();

class Students {
  constructor(FirstName, LastName, grade, age1) {
    s;
    this.FirstName = FirstName;
    this.LastName = LastName; //print just the name and age
    this.grade = grade;
    this.age1 = age1;
  }
  allDetails() {
    console.log(this.FirstName, this.LastName, this.age1);
  }
}

let ofek = new Students("ofek", "cohen", "first year", 20);
ofek.allDetails();
