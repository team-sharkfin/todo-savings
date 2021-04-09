FROM node:14
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]
