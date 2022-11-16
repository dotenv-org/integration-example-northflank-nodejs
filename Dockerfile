FROM node:12-alpine AS builder

COPY package.json  .
RUN npm install

COPY . .

EXPOSE 80
CMD [ "npm", "run", "build" ]
