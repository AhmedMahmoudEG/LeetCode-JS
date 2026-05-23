1# Write your MySQL query statement below
2select employee_id
3from employees 
4left join salaries  using(employee_id)
5where salary is null
6union
7
8select employee_id
9from salaries
10left join employees using(employee_id)
11where name is null
12order by employee_id
13