function main() {
  function Car(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
    this.getMake = function () {
      return this.make;
    };
  }

  Car.prototype.getModel = function () {
    return this.model;
  };

  Car.prototype.getYear = function () {
    return this.year;
  };

  Car.prototype.getColor = function () {
    return this.color;
  };

  Car.prototype.getMileage = function () {
    return this.mileage;
  };
  return Car;
}

const Car = main();
const myCar = new Car("Toyota", "Corolla", 2020, "blue", 15000);
console.log(myCar.getMake()); // Output: Toyota
console.log(myCar.getModel()); // Output: Corolla
console.log(myCar.getYear()); // Output: 2020
console.log(myCar.getColor()); // Output: blue
console.log(myCar.getMileage()); // Output: 15000
