1# Write your MySQL query statement below
2select eu.unique_id , emp.name from employees emp
3left join employeeuni eu on 
4eu.id = emp.id