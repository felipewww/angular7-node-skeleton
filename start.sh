#!/bin/bash

echo "\e[93m Initializing microservices skeleton \e[0m";
echo ' '
echo "\e[92m- Remember to fill out all .env files within each micro-service folder \e[0m";
sleep 5

echo "\e[92m- Turning off LOCAL Apache and MySQL \e[0m";

service apache2 stop
service mysql stop

docker-compose up --build