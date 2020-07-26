/**
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let i=0;
    //sol 1& 2
   // while(i<k){
        //sol1
        //nums.unshift(nums.pop())
        //------------------------
        //sol2
        //nums.unshift(nums.splice(-1,))
        //------------------------
        
        
       // i++
   // 
    //return nums
    //-------------------------
    //sol3
    if(nums.length>k){
    nums.unshift(...nums.splice(-k));
    }
    else{
       let i=0;
        while(i<k){
            nums.unshift(nums.pop())
            i++;
        }
    }
    return nums;
};
