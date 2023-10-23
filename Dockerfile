FROM node:18-alpine AS build
WORKDIR /app
COPY ./source/package.json /app/
RUN npm install
COPY ./source/ /app/
RUN npm run build:ssr

FROM nginx:1.16.1 AS client-browser
COPY --from=build /app/dist/client/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

FROM node:18-alpine AS ssr-server
COPY --from=build /app/dist /app/dist/
COPY ./source/package.json /app/package.json
WORKDIR /app
EXPOSE 4000
CMD npm run serve:ssr