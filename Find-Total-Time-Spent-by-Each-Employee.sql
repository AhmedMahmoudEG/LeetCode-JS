1# Write your MySQL query statement below
2select event_day as day ,
3emp_id , 
4sum(out_time - in_time) as total_time
5from employees 
6group by event_day , emp_id