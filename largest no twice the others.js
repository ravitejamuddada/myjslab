In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.


---------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if(nums.length==0) return -1;
    const largest=Math.max(...nums);
    let index=nums.indexOf(largest);
    nums.splice(index,1)
    let isOk=true;
    nums.forEach(e=>{if(largest<2*e) {
        isOk=false;
        return isOk;} })
        
        return isOk?index:-1
};
