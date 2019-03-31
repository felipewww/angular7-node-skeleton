FROM node:9

WORKDIR /skeleton-store/endpoints-main

#RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/skeleton-store/endpoints-main/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/skeleton-store/endpoints-main/entrypoint.sh"]

#EXPOSE 3000
