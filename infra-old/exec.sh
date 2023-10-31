docker build -t leonnepratas-client-ssr:latest Dockerfile
# docker run --name leonnepratas-client-ssr -d -p 80:4000 leonnepratas-client-ssr:latest

docker run --name leonnepratas-client -d -p 80:4000 leonnepratas-client-ssr:latest