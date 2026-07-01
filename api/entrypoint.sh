#!/bin/bash
mkdir -p database
touch database/database.sqlite
mkdir -p .xdebug-trace
composer install
php artisan migrate --seed --force
php artisan serve --host=0.0.0.0 --port=8000