FROM node:18-alpine

WORKDIR /usr/src/app

COPY source/package*.json .

RUN npm install

RUN npm run build:ssr

COPY source/dist .

COPY source .
# If you are building your code for production
# RUN npm ci --omit=dev

EXPOSE 8080

CMD [ "node", "server/main.js" ]