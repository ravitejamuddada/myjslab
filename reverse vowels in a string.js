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
