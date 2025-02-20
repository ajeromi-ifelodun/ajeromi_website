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

## Johnny i need you to build and work with the docker container for the final changes 
# i made changes to the next.config.tsx to disable eslint during build 
## to build your initial docker image "docker build -t ajeromiapp . "(ajeromiapp being the image name)
##  to start the container docker run -d -p 8080:80 --name my-container my-app (--container and name can be whatever you need )