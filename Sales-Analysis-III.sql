1# Write your MySQL query statement below
2select p.product_id ,
3        p.product_name
4from product p 
5join sales s 
6on p.product_id = s.product_id
7group by p.product_id, p.product_name
8having 
9    min(s.sale_date) >= '2019-01-01'
10    and max(s.sale_date) <= '2019-03-31';