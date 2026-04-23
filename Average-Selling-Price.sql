1# Write your MySQL query statement below
2select p1.product_id ,
3ifnull(
4round(
5    sum(p1.price*u1.units)/sum(u1.units),2),0) 
6    
7    as average_price
8from Prices p1 
9left join 
10UnitsSold u1 
11on 
12p1.product_id=u1.product_id and
13u1.purchase_date between p1.start_date and p1.end_date 
14group by p1.product_id;
15