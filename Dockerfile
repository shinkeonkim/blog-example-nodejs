FROM ubuntu:18.04

WORKDIR /usr/src/app

RUN apt update
RUN apt install wget -y
RUN apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_14.x -o ~/nodesource_setup.sh
RUN bash ~/nodesource_setup.sh
RUN apt install nodejs -y
RUN apt-get install build-essential -y
RUN npm install express -g
RUN npm install yarn -g


COPY package.json .
COPY yarn.lock . 

RUN yarn install
RUN yarn audit fix

COPY . .

EXPOSE ${PORT}
