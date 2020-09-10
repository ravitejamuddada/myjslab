Example 1:

Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
Example 2:

Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.


-----------------------------------------------

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// var getHint = function(secret, guess) {
//     if(secret==guess) return secret.length+'A0B'
    
//     let secretArray=[...secret], guessArray=[...guess]
//     let [cow,bull]=[0,0];
     
//     for(let i=0;i<guessArray.length;i++){
//         if(secretArray[i]==guessArray[i]){
//             // secretArray.splice(i,1)
//             // guessArray.splice(i,1)
//             [secretArray[i],guessArray[i]]=['','']
//             ++cow;
//             //i--;
           
//         }
//         else if(secretArray.indexOf(guessArray[i])!=-1 && secretArray[i]!=guessArray[i]){
//             // secretArray.splice(secretArray.indexOf(guessArray[i]),1)
//             // guessArray.splice(i,1)
            
//              [secretArray[secretArray.indexOf(guessArray[i])],guessArray[i]]=['','']
//             ++bull;
//             //i--
            
//         }
//     }
//     return `${cow}A${bull}B`
// };

var getHint = function(secret, guess) {
    var secret_digits={}, guess_digits=[]
       
        let secretArray=[...secret], guessArray=[...guess]
        let [cow,bull]=[0,0];
     for(let i=0;i<guessArray.length;i++){
        if (secretArray[i]===guessArray[i]){
            bull++;
        }
        else {
            secret_digits[secretArray[i]] = (secret_digits[secretArray[i]] === undefined)?1:secret_digits[secretArray[i]]+1;
            guess_digits.push(guessArray[i]);
        }
    }

    guess_digits.forEach(digit=> {
        if(secret_digits[digit]){
            cow++;
            secret_digits[digit]--;
        }
    });
    return `${bull}A${cow}B`
};
