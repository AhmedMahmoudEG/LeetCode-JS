1/**
2 * @param {number} num
3 * @return {string}
4 */
5var intToRoman = function(num) {
6    let res =""
7    while(num>0){
8        if(num>=1000){
9            res +="M"
10            num -=1000
11        }else if(num>=900){
12            res +="CM"
13            num -=900
14        }else if(num>=500){
15            res +="D"
16            num -=500
17        }else if (num>=400){
18            res+="CD"
19            num -=400
20        }else if(num>=100){
21            res +="C"
22            num -=100
23        }else if(num>=90){
24            res +="XC"
25            num -=90
26        }else if(num>=50){
27            res +="L"
28            num -=50
29        }else if(num>=40){
30            res +="XL"
31            num -=40
32        }else if(num>=10){
33            res +="X"
34            num -=10
35        }else if(num>=9){
36            res +="IX"
37            num -=9
38        }else if(num>=5){
39            res +="V"
40            num -=5
41        }else if(num>=4){
42            res +="IV"
43            num -=4
44        }else if(num>=1){
45            res +="I"
46            num -=1
47        }
48    }
49    return res
50};