class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         const map = new Map();

    // Step 1: Count frequencies
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Step 2: Create buckets
    const buckets = new Array(nums.length + 1);

    // Step 3: Group numbers by frequency
    for (let [num, freq] of map) {
        if (!buckets[freq]) {
            buckets[freq] = [];
        }

        buckets[freq].push(num);
    }

    // Step 4: Collect top K elements
    const result = [];

    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i]) {
            for (let num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }

    return result;
    }
}
