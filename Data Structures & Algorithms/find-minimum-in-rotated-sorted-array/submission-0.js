class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length
        let low = 0
        let high = n-1
        let ans 
        while(low<high){
            let mid = Math.floor((low+high)/2)
            if(nums[mid]>nums[high]){
                low=mid+1
            }
            else{
                high=mid
            }
        
        }
        return nums[low]
    }
}
