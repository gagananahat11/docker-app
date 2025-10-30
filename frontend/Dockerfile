# Build stage
FROM node:20 AS builder
WORKDIR /app

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
# new
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM node:20-alpine AS prod
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
