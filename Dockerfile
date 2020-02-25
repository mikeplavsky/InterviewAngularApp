FROM node

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install -g @angular/cli && npm install && npm audit fix && npm audit
