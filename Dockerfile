#Stage 1
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . ./
RUN yarn build

# Stage 2
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html 
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]