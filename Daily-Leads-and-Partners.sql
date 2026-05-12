1# Write your MySQL query statement below
2select 
3date_id , 
4make_name , 
5count(distinct lead_id)as unique_leads , 
6count(distinct partner_id) as unique_partners
7from DailySales
8group by date_id , make_name
9