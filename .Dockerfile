FROM node:latest  as build
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json tsconfig.json wait.sh ./
COPY api ./api
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN yarn
EXPOSE 4000
CMD /wait && yarn start