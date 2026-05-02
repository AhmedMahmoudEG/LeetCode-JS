1# Write your MySQL query statement below
2select lb.book_id ,
3 lb.title , 
4 lb.author , 
5 lb.genre , 
6 lb.publication_year  , 
7 count(br.record_id) as current_borrowers
8from library_books lb 
9left join borrowing_records br
10on lb.book_id = br.book_id and br.return_date IS NULL
11GROUP BY 
12    lb.book_id, lb.title, lb.author, lb.genre, lb.publication_year, lb.total_copies
13HAVING COUNT(br.record_id) = lb.total_copies
14ORDER BY current_borrowers DESC, lb.title ASC;