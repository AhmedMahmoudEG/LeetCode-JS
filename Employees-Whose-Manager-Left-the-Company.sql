1# Write your MySQL query statement below
2SELECT emp.employee_id
3FROM employees emp
4LEFT JOIN employees mang
5ON emp.manager_id = mang.employee_id
6WHERE emp.salary < 30000 
7AND mang.employee_id IS NULL 
8AND emp.manager_id IS NOT NULL
9order by emp.employee_id