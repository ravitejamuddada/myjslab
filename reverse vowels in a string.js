/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelIndices=[];
    const res=[];
    const arr=Array.from(s);
    const Vowels=arr.filter((letter,i)=>{
            const isVowel='aeiou'.includes(letter.toLowerCase())
        if(isVowel){
            vowelIndices.push(i)
        }
   
     return isVowel;
    
    } ).forEach((v,i,res)=>{arr[vowelIndices[i]]=res[res.length-i-1]})
    return arr.join('');
};



--------------------------------------2----------------------------------


var reverseVowels = function(s) {
  if (s.length <= 1) { return s; }
  const str = [...s];
  let left = 0;
  let right = s.length - 1;
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  while(left < right) {
    if (set.has(str[left]) && set.has(str[right])) {
      [str[right], str[left]] = [str[left], str[right]];      
      left++;
      right--;
    } else if (set.has(str[left])) {
      right--;
    } else {
      left++;
    }
  }
  return str.join('');
};
