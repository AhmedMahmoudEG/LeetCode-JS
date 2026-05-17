1# Write your MySQL query statement below
2select product_id , 'store1' as store , store1 as price from products where store1 is not null
3union all 
4select product_id , 'store2' as store , store2 as price from products where store2 is not null
5union all 
6select product_id , 'store3' as store , store3 as price from products where store3 is not null
7