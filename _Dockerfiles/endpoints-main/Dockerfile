FROM node:9

WORKDIR /ai-store/endpoints-main

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/ai-store/endpoints-main/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/ai-store/endpoints-main/entrypoint.sh"]

#EXPOSE 3000
