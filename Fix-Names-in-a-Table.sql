1# Write your MySQL query statement below
2select user_id , 
3concat(upper(LEFT(name,1)),LOWER(substring(name,2))) as name
4from users
5order by user_id