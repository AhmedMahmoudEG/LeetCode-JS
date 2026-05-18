1public class Solution {
2    public bool ContainsDuplicate(int[] nums) {
3        HashSet<int> set = new HashSet<int>();
4        for(int i =0;i<nums.Length;i++){
5            if(set.Contains(nums[i])){
6                return true;
7            }
8            set.Add(nums[i]);
9        } 
10        return false;
11    }
12}