1# Write your MySQL query statement below
2select user_id , max(time_stamp) as last_stamp 
3from logins
4WHERE time_stamp >= '2020-01-01'
5  AND time_stamp < '2021-01-01'
6group by user_id 