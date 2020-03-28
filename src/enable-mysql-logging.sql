-- Run this as root user
SET global general_log_file='/tmp/mysql.log'; 
SET global log_output = 'file';
SET global general_log = on;

-- Don't forget to turn off the logs after inspecting!
SET global general_log = off;