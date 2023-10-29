var arr1=[11,22,33,44,55];
var arr2=["a","b","c","d","e"];

function reverse(genericArray){
    var swap;
    for(var i = 0;i<=Math.trunc(genericArray.length/2);i++){
        swap = genericArray[i];
        genericArray[i] = genericArray[genericArray.length - i - 1];
        genericArray[genericArray.length - i - 1] = swap;
    }
    return genericArray;
}
console.log("reverse of [" + arr1 + "] is [" + reverse(arr1) + "]");
console.log("reverse of [" + arr2 + "] is [" + reverse(arr2) + "]");
// var Test1,Test2;
// for(var i =0;i<arr1.length;i++) {
//     Test1 *= (reverse((arr1)[i]) == [55,44,33,22,11][i]) 
// }
// for(var i =0;i<arr1.length;i++) {
//     Test2 *= (reverse((arr2)[i]) == ["e","d","c","b","a"][i])   
// }
