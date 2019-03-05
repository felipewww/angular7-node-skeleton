FROM node:9

WORKDIR /skeleton-store/angular-web

RUN apt-get update && apt-get install nano -y

RUN npm install -g @angular/cli

COPY entrypoint.sh /entrypoints/skeleton-store/angular-web/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/skeleton-store/angular-web/entrypoint.sh"]