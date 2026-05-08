1# Write your MySQL query statement below
2select patient_id ,
3patient_name,
4conditions
5from patients
6where conditions like 'DIAB1%'
7   or conditions like '% DIAB1%';