FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV VITE_API_BASE_URL=http://localhost:8080/api

RUN npm run build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
RUN printf "server {\n\
    listen 80;\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files \$uri /index.html;\n\
    }\n\
}\n" > /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
