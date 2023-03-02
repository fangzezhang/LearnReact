FROM node:14-alpine AS builder
WORKDIR /web
COPY . /web/
RUN npm i
RUN craco-build

FROM nginx:stable-alpine
WORKDIR /web
COPY --from=builder ./build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]
