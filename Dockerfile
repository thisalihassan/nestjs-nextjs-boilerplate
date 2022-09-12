# Base image
FROM node:18-alpine as backend

WORKDIR /opt/code
COPY package*.json ./

COPY . ./

RUN rm -rf client && npm ci && npm run build && npm prune --production
ENV NODE_ENV production

CMD [ "node", "dist/main.js" ]


FROM node:18-alpine as client
WORKDIR /opt/client
COPY /client/package*.json ./
RUN npm ci
COPY ./client ./
RUN npm run build
CMD npm start