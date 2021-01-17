# Base Image
FROM node:12

# Create app directory
WORKDIR /app/frontend

#Install app dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
RUN npm install
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
