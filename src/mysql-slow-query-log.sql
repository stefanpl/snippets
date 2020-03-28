set global slow_query_log = 'ON';
set global log_queries_not_using_indexes = 'ON';
set global slow_query_log_file ='/var/log/mysql/slow-query.log';

# how much time before a query gets logged? (in seconds): 
set global long_query_time = 3.5;

# check variables
show variables like '%slow%';