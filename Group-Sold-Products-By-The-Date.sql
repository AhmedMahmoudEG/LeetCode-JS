1# Write your MySQL query statement below
2
3select sell_date, count(distinct product) as num_sold , group_concat(distinct product order by product asc) as products
4from activities 
5group by sell_date
6order by sell_date asc
7