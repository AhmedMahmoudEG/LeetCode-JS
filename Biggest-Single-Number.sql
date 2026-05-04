1# Write your MySQL query statement below
2select Max(num) num 
3from (
4    select num from MyNumbers
5    group by num
6    having count(*) =1 
7) t;
8
9