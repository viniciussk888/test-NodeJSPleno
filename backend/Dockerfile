FROM node:12.18.3-alpine

RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3333

CMD ["npm", "start"]
