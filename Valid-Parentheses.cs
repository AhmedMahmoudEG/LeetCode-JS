1public class Solution {
2    public bool IsValid(string s) {
3        List<char> list = new List<char>();
4        Dictionary<char,char> dic = new Dictionary<char,char> {
5             { ')', '(' },
6            { '}', '{' },
7            { ']', '[' } 
8            };
9        foreach(var c in s){
10            if(!dic.ContainsKey(c)){
11                list.Add(c);
12            }
13            else
14            {
15                if(list.Count==0|| list[list.Count-1] !=dic[c])
16                    return false;
17
18                list.RemoveAt(list.Count - 1);
19            }
20
21        }
22        return list.Count ==0;
23    }
24}