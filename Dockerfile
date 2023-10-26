#Stage 1
FROM node:17-alpine as builder
WORKDIR /frontend
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

# Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf./*
COPY --from=builder /frontend/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]