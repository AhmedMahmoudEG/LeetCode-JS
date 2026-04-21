1# Write your MySQL query statement below
2select pd.product_name , s.year , s.price from product pd 
3join sales s 
4on s.product_id = pd.product_id