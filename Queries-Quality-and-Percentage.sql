1# Write your MySQL query statement below
2select query_name , 
3round(avg(rating / position),2) as quality ,
4round(100 * sum(CASE WHEN rating < 3 THEN 1 ELSE 0 END) / count(*) ,2) as poor_query_percentage
5from queries 
6group by query_name