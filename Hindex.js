Input: citations = [3,0,6,1,5]
Output: 3 
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3.

//======================================================///////
var hIndex = function(citations) {
    citations.sort((a,b)=>{return a-b});
    let hIndex=0;
    for(let i=citations.length-1;i>=0;i--){
        let c=citations.length-i;
        if(citations[i]>=c){
            hIndex=c;
        }
        else{
            break;
        }
    }
    return hIndex;
};
