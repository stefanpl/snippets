#!/bin/bash

# Installing laravel on laradock
# required: composer, docker

# if not done already ...
composer global require "laravel/installer"

# Make sure to place the $HOME/.composer/vendor/bin directory in your $PATH 
laravel new myapplication
cd myapplication

# Installing laradock
git clone https://github.com/Laradock/laradock.git
cd larardock
cp env-example .env
# run it!
docker-compose up -d nginx mysql redis beanstalkd

# set the following in projects .env (NOT laradock .env)
# DB_HOST=mysql
# REDIS_HOST=redis

# Install composer requirements from inside the workspace container
docker exec -i -t laradock_workspace_1 bash
-> composer install
-> php artisan key:generate

# Get facades working. Depending on your commitment to the project, generate vs gist
# https://github.com/barryvdh/laravel-ide-helper