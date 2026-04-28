1# Write your MySQL query statement below
2select v.customer_id, count(v.customer_id) as count_no_trans from visits v
3left join Transactions t 
4on v.visit_id = t.visit_id
5where t.visit_id is null
6group by v.customer_id