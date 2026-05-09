1# Write your MySQL query statement below
2select u.name , sum(t.amount) as balance 
3from users u 
4join transactions t 
5on u.account = t.account
6group by u.name
7having balance > 10000