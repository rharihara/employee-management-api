FROM node:18-alpine

RUN apk add --no-cache openssl libc6-compat ca-certificates

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

ENV PRISMA_CLI_BINARY_TARGETS="linux-musl-openssl-3.0.x"

RUN npx prisma generate

COPY . .

EXPOSE 5000

CMD ["sh", "-c", "npx prisma db push && node src/index.js"]