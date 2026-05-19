1public class Solution {
2    public bool IsAnagram(string s, string t) {
3        if(s.Length !=t.Length) return false;
4        Dictionary<char,int> map = new Dictionary<char,int>();
5        foreach (char i in s)
6        {
7        map[i] = map.GetValueOrDefault(i, 0) + 1;
8        }
9        foreach (char i in t)
10        {
11
12            if (!map.ContainsKey(i)) return false;
13            map[i]--;
14            if (map[i] < 0) return false;
15        }
16        return true;
17    }
18}