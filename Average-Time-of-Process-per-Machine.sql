1# Write your MySQL query statement below
2SELECT 
3    a1.machine_id,
4    ROUND(AVG(a2.timestamp - a1.timestamp), 3) AS processing_time
5FROM Activity a1
6JOIN Activity a2
7    ON a1.machine_id = a2.machine_id
8    AND a1.process_id = a2.process_id
9WHERE a1.activity_type = 'start'
10AND a2.activity_type = 'end'
11GROUP BY a1.machine_id;