# Use official Node.js image
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g sequelize-cli
COPY . .

ENV NODE_ENV=development

EXPOSE 3001
CMD ["node", "index.js"] 