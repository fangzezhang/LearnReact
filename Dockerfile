FROM node:14-alpine AS builder
WORKDIR /web
COPY . /web/
RUN npm i
CMD ["npm", "run-script", "craco-build"]

FROM nginx:stable-alpine
WORKDIR /web
RUN cd web/
RUN ls
COPY --from=builder /web/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]
