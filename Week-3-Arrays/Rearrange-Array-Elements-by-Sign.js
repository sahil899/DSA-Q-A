
// solved using the extra space but need to see the optimized approach also
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    positiveArr = [];
    negativeArr = [];
    totalArr = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
           positiveArr.push(nums[i]);
        } else{
            negativeArr.push(nums[i]);
        }
    }
    let index =0;
    let positiveIndex =0;
    let negativeIndex = 0;
    while( index<nums.length){
        if(index%2==0){
            totalArr.push(positiveArr[positiveIndex]);
            positiveIndex++;
        } else{
            totalArr.push(negativeArr[negativeIndex]);
            negativeIndex++;
        }
        index++;
    }

    return totalArr;
    
};
