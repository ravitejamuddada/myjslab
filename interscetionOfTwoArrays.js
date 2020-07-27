/**
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/


----------------------------------------------------------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    //------sol1-----
    //return nums1.filter(e=>nums2.includes(e))
    
    
    //----sol2---------
    let l1=nums1.length
    let l2=nums2.length;
    let res=[];
    if(l1 > 0 && l2>0){
    nums1.sort((a,b)=>{return a-b;})
    nums2.sort((a,b)=>{return a-b;})
    let i=0;
    let j=0;
    
    while(i<l1 && j<l2){
        if(nums1[i]==nums2[j]){
                res.push(nums1[i]);
                i++;
                j++;
               
            }else if(nums1[i]>nums2[j]){
                j++;
            }else{
                i++;
            }
    }
    
    }
   return res;
    
};
