const square = function(x){
  return x*x;
};
console.log(square(8));

// const squareArrow = (x) =>{
//   return x*x;
// };
const squareArrow = (x) => x*x;
console.log(squareArrow(8));

const getFirstName = (fullName) => {
  return fullName.split(' ')[0]
};
console.log('regular arrow function', getFirstName('Gopal Singh'));
const getFirstNameShort = (fullName) => fullName.split(' ')[0];
console.log('shorthand arrow function', getFirstNameShort('Gopal Singh'));

//does not binds this value

const userArr = {
  name: 'Gopal',
  cities: ['Delhi', 'Noida', 'Mumbai'],
  printCitiesLived(){
    this.cities.forEach((city) =>{
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

userArr.printCitiesLived();

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}
console.log(multiplier.multiply());
