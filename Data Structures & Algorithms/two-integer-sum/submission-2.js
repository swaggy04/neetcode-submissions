class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mp = new Map()
        for(let i = 0 ; i <nums.length; i++){
            let need = target = nums[i]
            if(mp.has(need)){
                return [mp.get(need),i]
            }
            mp.set(nums[i],i)
        }
    }
}
