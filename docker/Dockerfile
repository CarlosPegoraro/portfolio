#FROM node:26-alpine3.23
#WORKDIR /web
#COPY package*.json ./
#RUN npm install
#COPY . .
#EXPOSE 5173
#CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM oven/bun:1-alpine
WORKDIR /web
COPY ../package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY .. .
CMD ["bun", "run", "dev", "--", "--host", "0.0.0.0"]