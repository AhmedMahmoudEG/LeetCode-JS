1# Write your MySQL query statement below
2select user_id , email from users
3where email REGEXP '^[a-zA-Z0-9_]+@[a-zA-Z]+\\.com$'        -- only one @
4order by user_id asc