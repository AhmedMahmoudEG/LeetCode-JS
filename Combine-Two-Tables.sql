1# Write your MySQL query statement below
2select p.firstName , p.lastName , a.city , a.state 
3from person p
4left join address a on p.personId = a.personid
5