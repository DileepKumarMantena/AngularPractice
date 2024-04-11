// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
// }  

//hetrogenus data type    bird
// console.log(person["age"])
// person['age']=85
// console.log(person)
// console.log(Object.keys(person))
// console.log(Object.values(person))

// const { firstName, lastName } = person;
// console.log(firstName, lastName);

// const currentDate = new Date();

// console.log(currentDate.getFullYear())

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayInfo = function() {
      console.log(`${this.year} ${this.make} ${this.model}`);
    };
  }
const myCar = new Car('Toyota', 'Camry', 2022);
myCar.displayInfo(); 
  

