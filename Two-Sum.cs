1public class Solution {
2    public int[] TwoSum(int[] nums, int target) {
3        Dictionary<int,int> map = new Dictionary<int,int>();
4        for(int i =0;i<nums.Length;i++){
5            int need = target - nums[i];
6            if(map.ContainsKey(need))  {
7                return [map.GetValueOrDefault(need), i];
8            }
9            map[nums[i]]=i;
10        }
11        return [];
12    }
13}