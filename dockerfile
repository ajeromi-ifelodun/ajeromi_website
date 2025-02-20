# 1️⃣ Build Stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy source files and build Next.js
COPY . .
ENV NODE_ENV=production
RUN npm run build

# 2️⃣ Production Stage
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/public public

EXPOSE 3000

CMD ["npm", "start"]