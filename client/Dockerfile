# Base Image
FROM node:12

# Create app directory
WORKDIR /app/frontend

#Install app dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .

CMD npm start
