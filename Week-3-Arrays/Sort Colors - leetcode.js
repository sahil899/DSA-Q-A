## My solution 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let rLatest= 0;
    let bLatest = nums.length -1;
    let i =0;
    while(i<nums.length){
        if(nums[i]===0){
         swap(nums, i, rLatest);
         i+=1;
         rLatest+=1;   
        } else if(nums[i]===2){
            if(i>bLatest) break;
            console.log(nums,"checking");
            swap(nums, i, bLatest);
            bLatest-=1;
            
        } else{
            i++;
        }
        
    }
    
};

var swap = function(num, firstIndex, secondIndex){
    const temp = num[firstIndex];
    num[firstIndex] = num[secondIndex];
    num[secondIndex] = temp;
    console.log(num);
}

## Optimized Solution
in the the swap is carried out internally
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0 ,mid = 0 ; high = nums.length - 1;
    while(mid <= high){
        if(nums[mid] == 0){
            [nums[low],nums[mid]] = [nums[mid],nums[low]];
            low++;
            mid++;
        }
        else if(nums[mid] == 1) {
            mid++;

        }
        else{
            [nums[mid],nums[high]] = [nums[high], nums[mid]];
            high--;
            
        }
    }

    
};
