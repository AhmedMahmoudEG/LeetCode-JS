1# Write your MySQL query statement below
2select m.employee_id , m.name , count(e.reports_to) as reports_count , round(avg(e.age),0) as average_age
3from employees e 
4join employees m 
5    on e.reports_to = m.employee_id
6GROUP BY m.employee_id, m.name
7ORDER BY m.employee_id;
8