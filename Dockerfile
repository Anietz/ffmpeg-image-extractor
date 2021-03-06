FROM node:14-alpine3.10 as ts-compiler
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run test
RUN npm run build

FROM node:14-alpine3.10
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY --from=ts-compiler /home/node/app/package*.json ./
RUN npm ci
RUN apk update
RUN apk add
RUN apk add ffmpeg
COPY . /usr/src/app

COPY --from=ts-compiler /home/node/app/build ./build
COPY .env .

EXPOSE 8070
CMD [ "node", "build/src/index.js" ]