
example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
     
    const sum=arr=>{let s=0;
                   arr.forEach(e=>s+=e)
                   return s;}
    let pivot=0;
    while(pivot<=nums.length-1){
    
    const leftSum=sum(nums.slice(0,pivot))
    const rightSum=sum(nums.slice(pivot+1))
    if(leftSum==rightSum){
        return pivot
    }
    else{
       pivot++; 
    }
    }
    return -1;
};
