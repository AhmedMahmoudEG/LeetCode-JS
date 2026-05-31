1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5var longestCommonPrefix = function(strs) {
6    if (strs.length === 0) return "";
7
8    let prefix = strs[0];
9
10    for (let i = 1; i < strs.length; i++) {
11        while (strs[i].indexOf(prefix) !== 0) {
12            prefix = prefix.slice(0, -1);
13            if (prefix === "") return "";
14        }
15    }
16
17    return prefix;
18    }
19