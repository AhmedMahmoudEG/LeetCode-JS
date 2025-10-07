# Write your MySQL query statement below
SELECT name as Customers from customers left join orders on customers.id = orders.customerId where orders.customerId IS null