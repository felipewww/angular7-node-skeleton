FROM node:9

WORKDIR /ai-store/gateway

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/ai-store/gateway/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/ai-store/gateway/entrypoint.sh"]
