1/**
2 * @param {number[]} arr
3 * @return {number}
4 */
5var sumOddLengthSubarrays = function(arr) {
6    let n = arr.length;
7    let result = 0;
8
9    // prefix sum
10    let pre = new Array(n + 1).fill(0);
11    for (let i = 0; i < n; i++) {
12        pre[i + 1] = pre[i] + arr[i];
13    }
14
15    for(let i=0;i<n;i++){
16        for(let k=i;k<n;k++){
17            if((k-i+1) % 2 ===1){
18                result +=pre[k+1] - pre[i]
19            }
20        }
21    }
22    /*
23    for(let i=0;i<n;i++){
24          // عدد اختيارات البداية
25        let left = i + 1;
26        // عدد اختيارات النهاية
27        let right = n - i;
28
29        // تقسيمهم odd / even
30        let oddLeft = Math.ceil(left / 2);
31        let evenLeft = Math.floor(left / 2);
32
33        let oddRight = Math.ceil(right / 2);
34        let evenRight = Math.floor(right / 2);
35
36        // عدد subarrays ذات الطول الفردي اللي فيها arr[i]
37        let oddCount = (oddLeft * oddRight) + (evenLeft * evenRight);
38
39        // مساهمة العنصر
40        result += arr[i] * oddCount;
41    }
42    */
43    return result 
44};