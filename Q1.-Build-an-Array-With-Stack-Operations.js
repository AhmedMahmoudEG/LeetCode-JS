1/**
2 * @param {number[]} target
3 * @param {number} n
4 * @return {string[]}
5 */
6var buildArray = function(target, n) {
7    let ops=[];
8    let cur = 1;
9  for (let i = 0; i < target.length; i++) {
10    const t = target[i];
11    // push+pop for every skipped number < t
12    while (cur < t) {
13      ops.push("Push");
14      ops.push("Pop");
15      cur++;
16    }
17    // push to keep t
18    if (cur === t) {
19      ops.push("Push");
20      cur++;
21    } else {
22      // if cur > t (shouldn't happen for valid input) break
23      break;
24    }
25  }
26  return ops;
27};