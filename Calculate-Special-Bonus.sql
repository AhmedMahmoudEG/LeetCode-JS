1# Write your MySQL query statement below
2select employee_id,
3case
4    when employee_id % 2 = 1 and name not like 'M%' then salary 
5    else  0 
6end as bonus
7from employees
8order by employee_id