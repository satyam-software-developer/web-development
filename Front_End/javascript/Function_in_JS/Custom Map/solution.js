function main() {
    function customMap(array, mappingFn) {
      const mappedArray = [];
  
      for (let i = 0; i < array.length; i++) {
        const mappedValue = mappingFn(array[i]);
        mappedArray.push(mappedValue);
      }
  
      return mappedArray;
    }
    return customMap;
  }
  
  const customMap = main();
  console.log(customMap([1,2,3], (x) => x * 2)); // [2, 4, 6]

