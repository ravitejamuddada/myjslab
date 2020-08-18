
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let s='';
//     digits.forEach(e=>s=s.concat(e))
//     let n=parseInt(s)+1;
//     return [...String(n)].map(e=>parseInt(e))
// };

var plusOne = function(digits) {
    for(let i =digits.length-1; i>=0; i--){
        if(digits[i]!==9){
            digits[i]++
            return digits
        }
        else{
            digits[i]=0;
        }
    }
    digits.unshift(1);
    return digits
};
