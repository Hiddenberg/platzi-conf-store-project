FROM node:alpine AS builder

WORKDIR /app

ADD . .

RUN npm install --force
RUN npm run build

FROM nginx:alpine-slim

COPY --from=builder /app/dist /app
ADD nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080