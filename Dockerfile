FROM node:5-slim

MAINTAINER Adrien Remacle <adrien@buildog.com>

# create a layer for dependencies so they're cached
RUN mkdir -p /reactjs
WORKDIR /reactjs
COPY package.json package.json
RUN npm install
RUN npm install -g concurrently

# copy the source and build
COPY . /reactjs

# add user and transfer ownership
RUN useradd -d /reactjs adrien \
	&& chown -R adrien:adrien /reactjs \
	&& chmod -R g+rw /reactjs