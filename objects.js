// // // const person = {
// // //     firstName: 'John',
// // //     lastName: 'Doe',
// // //     age: 25,
// // // }  

// // //hetrogenus data type    bird
// // // console.log(person["age"])
// // // person['age']=85
// // // console.log(person)
// // // console.log(Object.keys(person))
// // // console.log(Object.values(person))

// // // const { firstName, lastName } = person;
// // // console.log(firstName, lastName);

// // // const currentDate = new Date();

// // // console.log(currentDate.getFullYear())

// // // function Car(make, model, year) {
// // //     this.make = make;
// // //     this.model = model;
// // //     this.year = year;
// // //     this.displayInfo = function() {
// // //       console.log(`${this.year} ${this.make} ${this.model}`);
// // //     };
// // //   }
// // // const myCar = new Car('Toyota', 'Camry', 2022);
// // // myCar.displayInfo(); 
  

// // let target = { a: 1 };
// // let source1 = { b: 2 };
// // let source2 = { c: 3, d: 4 };

// // Object.assign(source1, target, source2);
// // console.log(target);
// // console.log(source1)


// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj));
// console.log(Object.keys(obj))
// console.log(Object.values(obj))


a=[1,2,3]
let obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.b = 3; 
console.log(obj.b);

b={
  "name":['Deepak',"JavaScript"]
}


