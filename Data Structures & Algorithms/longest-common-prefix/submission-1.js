class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let start = strs[0]
        let end = strs[strs.length-1]
        end =""
        for(let i=0 ; i<start.length;i++){
            if(start[i] === end[i]){
                ans+=start[i]
            } 
            else
                break;
        }
        return ans
    }
}
