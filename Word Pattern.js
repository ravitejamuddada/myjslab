Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

--------------------------------------------

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    if(!pattern.length || !str.length) return false;
    let strArr=str.split(" ");
    if(pattern.length!=strArr.length) return false;
    let map = new Map();
    let arr=[];
    for(let i=0;i<pattern.length;i++){
        
        if(map.has(strArr[i])){
            if(map.get(strArr[i])!=pattern.charAt(i)){
            return false;
            }
        }
        else{
            
            if(arr.indexOf(pattern.charAt(i))!=-1){
                return false;
            }
            map.set(strArr[i],pattern.charAt(i))
            arr.push(pattern.charAt(i));
        }
    }
    return true;
};
