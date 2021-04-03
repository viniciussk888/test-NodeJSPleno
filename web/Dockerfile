FROM node:alpine as builder

RUN mkdir -p /usr/src/app/front
WORKDIR /usr/src/app/front

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /usr/src/app/front/build /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
