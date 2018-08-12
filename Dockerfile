FROM nginx:alpine
COPY dist/web-app /usr/share/nginx/html
