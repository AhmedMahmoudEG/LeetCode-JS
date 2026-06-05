1public class Solution {
2    public int ClimbStairs(int n) {
3
4        if (n == 1) return 1;
5        if (n == 2) return 2;
6
7        List<int> dp = new List<int> { 1, 2 };
8        for(int i =2;i<n;i++){
9            dp.Add(dp[i - 1] + dp[i - 2]);
10        }
11        return dp[n-1];
12    }
13}