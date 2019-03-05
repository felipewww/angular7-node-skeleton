FROM node:9

WORKDIR /skeleton-store/gateway

RUN apt-get update && apt-get install nano -y

COPY entrypoint.sh /entrypoints/skeleton-store/gateway/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/skeleton-store/gateway/entrypoint.sh"]
