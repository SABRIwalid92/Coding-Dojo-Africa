function targetSum(nums, target){
    while(Math.max(...nums) + Math.min(...nums) > target){
        nums = nums.filter((el)=>(el!=Math.max(...nums)));
    }
    while(Math.max(...nums) + Math.min(...nums) < target){
        nums = nums.filter((el)=>(el!=Math.min(...nums)))
    }


return nums;}

var nums1 = [1, 2, 5, 7, 99];
var target1 = 12;

console.log((targetSum(nums1,target1)));


