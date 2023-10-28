FROM node:18-alpine

WORKDIR /app

COPY ./source/package.json /app/

RUN npm install

COPY ./source/ /app/

RUN npm run build:ssr

EXPOSE 4000

CMD npm run serve:ssr
