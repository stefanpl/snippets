#!/bin/bash

# php-fpm is a process manager which supports the USER2 signal, which is used to reload the config file.
# From inside the container:

kill -USR2 1
