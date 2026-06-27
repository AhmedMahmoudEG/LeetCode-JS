1# Write your MySQL query statement below
2select player_id , min(event_date) as first_login 
3from activity 
4group by player_id