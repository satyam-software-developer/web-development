function generateID(start) {
  let count = start;
  return function id() {
    return `A_2023_${count++}`;
  };
}

const func = generateID(1);
console.log(func()); // A_2023_1
console.log(func()); // A_2023_2
console.log(func()); // A_2023_3
