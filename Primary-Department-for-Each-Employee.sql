1# Write your MySQL query statement below
2
3SELECT employee_id, department_id
4FROM Employee
5WHERE primary_flag = 'Y' 
6union 
7select employee_id , department_id
8from employee
9GROUP BY employee_id
10HAVING COUNT(*) = 1;