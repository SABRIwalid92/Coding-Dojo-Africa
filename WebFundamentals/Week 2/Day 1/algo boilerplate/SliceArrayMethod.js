/* 
    Recreate the built in .slice method
    Given an array, a start index, and an end index,
    return a NEW array that has only the elements from
    the start index (inclusive) to the end index (exclusive)
    What should you do if the provided end index is out of bounds?
*/

//             0    1    2    3    4
const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
const expected1 = ["a", "b", "c", "d", "e"];

const arr2 = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ["a"];

//            0   1    2   3   4
const arr3 = [12, 24, 36, 48, 60];
const startIdx3 = 1;
const endIdx3 = 3;
const expected3 = [24, 36];

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100;
const endIdx4 = 100;
const expected4 = ["a", "b", "c", "d", "e"];

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];

/*
    👉 spend 10 mins writing the pseudocode only!
    given the array, the start and the end indexes, the method should  output the array containing input array values from start index to end index exclusive.


*/

function slice(items, startIdx, endIdx) {
    var result = [];
    for(var i=startIdx; i<endIdx;i++){
        if(items[i]){result.push(items[i]);}
    }
    return result
}

// Tests
const result1 = slice(arr1, startIdx1, endIdx1);
console.log(result1, "should be", expected1);