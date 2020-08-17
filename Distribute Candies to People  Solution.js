/////Input: candies = 10, num_people = 3
Output: [5,2,3]
Explanation: 
On the first turn, ans[0] += 1, and the array is [1,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0].
On the third turn, ans[2] += 3, and the array is [1,2,3].
On the fourth turn, ans[0] += 4, and the final array is [5,2,3].//


-------------------------------------------/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {        
    let candiesLeft = candies;
    let results =Array(num_people).fill(0);
    let n =1;
    while(candiesLeft> 0 )
    {
        for( let i=0;i< num_people; i++)
        {            
            if( candiesLeft == 0) break;            
            let index =  i % num_people;    
            if( candiesLeft <= n){
                results[index] += candiesLeft;
                candiesLeft =0;
                break;
            }else{
                results[index] += n;    
            }   
            candiesLeft -= n;
            n++   
        }        
    }    
    return results;
};
