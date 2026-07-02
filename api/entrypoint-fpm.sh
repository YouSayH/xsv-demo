#!/bin/bash
mkdir -p database
touch database/database.sqlite
mkdir -p .xdebug-trace
chmod -R 0777 .xdebug-trace storage bootstrap/cache database
# CLI はトレース対象外にする（start_with_request=yes のままだと composer/artisan まで記録され起動が激遅になる）
XDEBUG_MODE=off composer install
XDEBUG_MODE=off php artisan migrate --seed --force
php-fpm
