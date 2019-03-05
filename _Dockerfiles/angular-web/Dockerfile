FROM node:9

WORKDIR /ai-store/angular-web

RUN apt-get update && apt-get install nano -y

RUN npm install -g @angular/cli

COPY entrypoint.sh /entrypoints/ai-store/angular-web/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/ai-store/angular-web/entrypoint.sh"]