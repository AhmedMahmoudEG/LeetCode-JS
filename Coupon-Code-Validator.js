1/**
2 * @param {string[]} code
3 * @param {string[]} businessLine
4 * @param {boolean[]} isActive
5 * @return {string[]}
6 */
7var validateCoupons = function(code, businessLine, isActive) {
8    let n = code.length;
9    const e = [], g = [], p = [], r = [];
10    var bLine = ["electronics", "grocery", "pharmacy", "restaurant"]
11    let res =[];
12    for(let i =0;i<n;i++){
13        const bl=businessLine[i]
14        if(!isActive[i]) continue
15        if (!bLine.includes(businessLine[i])) continue
16        if(!(/^[a-zA-Z0-9_]+$/.test(code[i]))) continue
17        if (bl.startsWith("e")) e.push(code[i]);
18        if (bl.startsWith("g")) g.push(code[i]);
19        if (bl.startsWith("p")) p.push(code[i]);
20        if (bl.startsWith("r")) r.push(code[i]);
21
22    }
23     e.sort(); g.sort(); p.sort(); r.sort();
24    return [...e, ...g, ...p, ...r];
25};