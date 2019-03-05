FROM node:9

WORKDIR /ai-store/angular-admin

RUN apt-get update && apt-get install nano -y

RUN npm install -g @angular/cli

COPY entrypoint.sh /entrypoints/ai-store/angular-admin/entrypoint.sh
RUN ["chmod", "+x", "/entrypoints/ai-store/angular-admin/entrypoint.sh"]