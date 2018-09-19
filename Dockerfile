FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY dist/web-app /usr/share/nginx/html
