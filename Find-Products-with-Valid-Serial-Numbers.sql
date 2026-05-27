1-- Write your PostgreSQL query statement below
2SELECT *
3FROM products
4WHERE description ~ '(^|\s)SN[0-9]{4}\-[0-9]{4}($|[^0-9]+$)'
5ORDER BY product_id