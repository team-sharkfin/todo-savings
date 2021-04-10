FROM node:14 AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV EXPRESS_BASE_URL http://localhost:3000
ENV NODE_ENV production
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=builder /app/dist /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
