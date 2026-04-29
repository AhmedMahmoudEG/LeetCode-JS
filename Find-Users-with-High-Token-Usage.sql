1# Write your MySQL query statement below
2select user_id , count(prompt) prompt_count , round(avg(tokens),2) as avg_tokens
3from prompts
4group by user_id
5HAVING 
6    COUNT(prompt) >= 3
7    AND user_id IN (
8        SELECT user_id
9        FROM prompts p2
10        WHERE p2.tokens > (
11            SELECT AVG(tokens)
12            FROM prompts p3
13            WHERE p3.user_id = p2.user_id
14        )
15    )
16order by avg_tokens desc , user_id asc
17
18
19