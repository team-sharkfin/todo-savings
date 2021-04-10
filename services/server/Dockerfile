FROM node:14
WORKDIR /app
COPY package.json .
ENV NODE_ENV production
RUN npm install
COPY . .
CMD ["node", "."]
