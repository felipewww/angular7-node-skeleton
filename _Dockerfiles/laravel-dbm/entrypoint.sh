#!/bin/bash

composer update
php artisan migrate

#Keep container alive after end this script
/bin/bash