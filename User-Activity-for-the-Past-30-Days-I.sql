1select activity_date as day , 
2count(distinct user_id) as active_users 
3from activity 
4where activity_date between '2019-06-28' and '2019-07-27'
5group by activity_date
6ORDER BY activity_date;