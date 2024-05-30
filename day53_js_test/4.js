function findIndicesOfTwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]; 
            }
        }
    }
    return []; 
}


const array = [2, 7, 11, 15];
const target = 18;
const indices = findIndicesOfTwoSum(array, target);
console.log("Indices of elements summing up to the target:", indices); 
