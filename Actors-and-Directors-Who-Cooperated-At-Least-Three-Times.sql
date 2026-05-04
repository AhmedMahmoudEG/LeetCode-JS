1# Write your MySQL query statement below
2select actor_id , director_id 
3from ActorDirector
4group by actor_id, director_id
5having count(*) >= 3