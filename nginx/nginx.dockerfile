FROM nginx:latest

LABEL maintainer="valko.dmitry.a@gmail.com"

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80