1# Write your MySQL query statement below
2select r.contest_id , 
3ROUND(COUNT(r.user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage
4from users u 
5join register r 
6on u.user_id = r.user_id
7group by (r.contest_id)
8order by percentage desc, r.contest_id ASC