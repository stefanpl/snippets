# Check the current value
show variables where Variable_name = 'innodb_buffer_pool_size';

# Set the value
SET GLOBAL innodb_buffer_pool_size=268435456;
# This will be 256 MB (256 * 1024 * 1024)

### Warning:
# Only certain values will be allowed, e.g. multiples of 128 MB.
# If a non-compliant value is inserted, mysql produces a warning and adjusts
# the value automatically, possibly leading to a higher
#  memory usage than intended! 
#
# Be sure to check the value (show variables) after setting it and observe
#  the actual memory consumption!

# See https://dev.mysql.com/doc/refman/5.7/en/innodb-buffer-pool-resize.html
