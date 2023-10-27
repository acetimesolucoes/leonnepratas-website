docker build -t acetimesolucoes/leonnepratas-client-ssr:latest .
docker run --rm --name leonnepratas-client-ssr -d -p 80:4000 acetimesolucoes/leonnepratas-client-ssr:latest