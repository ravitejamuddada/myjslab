Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]



/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
**/
var combinationSum3 = function(k, n) {
  const backtrack = (remain, k, comb, start, results) => {
    // A valid combination: adds up to n and has only k numbers
    if(remain === 0 & comb.length === k) {
      results.push([...comb]) 
    } 
	// invalid combination that is too large 
	else if (remain < 0 ) {
      return 
    } 
	// invalid combination that is too small
	else if (remain > 0 && comb.length === k) {
      return  
    } else {
        if(comb.length<k){
      for(let i=start; i<10; i++) {
        comb.push(i)
        backtrack(remain-i, k, comb, i+1, results  )
       comb.pop()
      }
        }
        else{
            return
        }
      
    }
    
  }
    const results = []
    const comb = []
    backtrack(n, k, comb, 1, results)
  return results
};
