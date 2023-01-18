FROM nginx:alpine
COPY .output/public /usr/share/nginx/html
