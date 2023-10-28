# base image
FROM alpine:latest

# specify the port number the container should expose
EXPOSE 80

# Use user as root
USER root

# Installing services
RUN apk update
RUN apk add bash
RUN apk add openrc
RUN mkdir /run/openrc && touch /run/openrc/softlevel
RUN rc-status

# Nginx
RUN apk add nginx
RUN rc-update add nginx
COPY /docker/nginx/start.sh /app/docker/nginx/start.sh

# SSL
COPY /docker/nginx/ssl/ /etc/ssl/

# Nodejs
RUN apk add nodejs
RUN apk add npm
RUN npm i -g npm
RUN npm i -g pm2
RUN npm i -g @angular/cli

# Build aplication
WORKDIR /app
COPY ./source/package.json /app/
RUN npm install

# Copy essencial files
COPY ./source/ /app/source/
COPY ./pm2/ /app/pm2/

# COPY ./source/nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./ssl/ /etc/ssl/
# RUN cat certificate.crt ca_bundle.crt >> certificate.crt