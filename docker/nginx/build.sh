#!/usr/bin/env bash

# Remove old images
docker rm -f acetimesolucoes/leonnepratas_client_ssr

# No cache build
docker build --no-cache -t acetimesolucoes/leonnepratas_client_ssr -f docker/nginx/Dockerfile .
