FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /server
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
EXPOSE 8000
CMD [ "yarn", "start:dev" ]
