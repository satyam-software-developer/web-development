function mergeArray(arr1,arr2){
    let finalarr;
    finalarr = [...new Set([...arr1, ...arr2])];
    return finalarr;
}


console.log(mergeArray([1,2,3,4,5],[1,2,3,6,7,8,]));