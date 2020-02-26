FROM node:10-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install -g @angular/cli@7.3.8 && npm install && npm audit fix && npm audit
