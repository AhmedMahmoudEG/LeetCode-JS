# Write your MySQL query statement below
select firstName, lastName,COALESCE(city, Null) AS city,
  COALESCE(state, Null) AS state FROM Person LEFT  join Address on Person.personId= address.personId 