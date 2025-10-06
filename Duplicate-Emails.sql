/*
SELECT DISTINCT a.email AS Email
FROM Person a
JOIN Person b
  ON a.email = b.email
 AND a.id <> b.id;
 */
 select EMAIL from person group by email having COUNT(*)>=2