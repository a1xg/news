FROM node:14.18.1-alpine

WORKDIR /app/frontend
COPY  ./ /app/frontend

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]