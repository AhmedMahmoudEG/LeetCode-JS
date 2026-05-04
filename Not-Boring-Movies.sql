1# Write your MySQL query statement below
2select id , movie , description , rating from cinema 
3where (id %2 =1) and description <> 'boring'
4order by rating desc