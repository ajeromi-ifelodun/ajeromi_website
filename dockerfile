# 1️⃣ Build Stage
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build

# 2️⃣ Production Stage
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]