1# Write your MySQL query statement below
2select x , y , z,
3case
4    when (x + y > z) and (x + z > y) and (y + z > x) then 'Yes' 
5    else 'No' end as triangle
6 from triangle 