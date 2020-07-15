FROM node:10

WORKDIR /usr/src/airbnb_reviews

COPY ./ ./

RUN npm install
