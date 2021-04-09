FROM node:14 AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY client client/
COPY webpack.config.js .
ENV NODE_ENV=production
RUN npm run build

FROM node:14
WORKDIR /app
COPY package*.json .
ENV NODE_ENV=production
RUN npm ci
COPY --from=builder /app/public public/
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]
