SET global general_log_file='/tmp/mysql.log'; 
SET global log_output = 'file';
SET global general_log = on;

# disable after logging:

SET global general_log = off;
