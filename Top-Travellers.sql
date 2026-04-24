1# Write your MySQL query statement below
2select u.name , COALESCE(sum(r.distance),0) as travelled_distance from users u left join rides r 
3on u.id  = r.user_id 
4group by u.id
5order by travelled_distance desc , u.name asc