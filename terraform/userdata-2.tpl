#!/bin/bash

# Configuration of TSL/SSL
# https://macdonaldchika.medium.com/how-to-install-tls-ssl-on-docker-nginx-container-with-lets-encrypt-5bd3bad1fd48
#    sudo apt install certbot -y


# Install Docker and All Packages
# Add Docker's official GPG key:
    sudo apt-get update -y &&
    sudo apt-get install ca-certificates curl gnupg -y
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg
    sudo apt-get update -y

# Add the repository to Apt sources:
    echo \
    "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update -y

    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
    sudo apt-get install docker-compose -y

    sudo groupadd docker
    sudo usermod -aG docker ubuntu
    sudo systemctl enable docker.service
    sudo systemctl enable containerd.service

docker pull acetimesolucoes/leonnepratas-client-ssr:latest
docker run --name leonnepratas-client-ssr -d -p 80:4000 acetimesolucoes/leonnepratas-client-ssr:latest

# Access User Root
    sudo su

# Create project folder
#    mkdir ~/project
#    cd ~/project

# Manage SSH Github Credentials
#    mkdir ~/.ssh
#    touch ~/.ssh/id_rsa

# Clone project from git repository
#    git clone https://github.com/acetimesolucoes/leonnepratas-website.git
#    cd leonnepratas-website
#    git checkout master
#    git pull

# Execute docker container
#    sh exec.sh
