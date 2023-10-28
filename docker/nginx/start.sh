#!/usr/bin/env bash

service nginx stop
rm -rf /etc/nginx
cp -R config/nginx /etc
service nginx start

cd /etc/ssl
# cat certificate.crt ca_bundle.crt >> certificate.crt

sudo /etc/init.d/nginx restart

cd /app/source
npm i
npm run build:ssr

cd ..
pm2 start /app/pm2/pm2-development.json

# Keep Container Running
tail -f /dev/null