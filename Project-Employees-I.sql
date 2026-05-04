1# Write your MySQL query statement below
2select p.project_id , round(avg(e.experience_years),2) as average_years 
3from project p 
4join Employee e
5on p.employee_id = e.employee_id
6group by project_id
7