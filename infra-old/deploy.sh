#!/bin/bash

cd ../source
rm -rf ./dist
npm run build:ssr

cd ../infra-old
rm -rf ./dist
cp -r ./../source/dist ./dist
firebase deploy --only hosting