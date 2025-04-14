FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY stack.env ./

COPY . .

RUN export $(cat stack.env | xargs) && npm run build

RUN npm install -g serve

EXPOSE 3001

CMD ["serve", "-s", "dist", "-l", "3001"]