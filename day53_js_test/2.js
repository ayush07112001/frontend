function findCommonElements(arr1, arr2) {
    
    const uniqueElements = {};
    
    const commonElements = [];

   
    arr1.forEach(element => {
        uniqueElements[element] = true;
    });

   
    arr2.forEach(element => {
        if (uniqueElements[element]) {
            commonElements.push(element);
            
        }
    });

    return commonElements;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);
console.log("Common elements:", commonElements);
