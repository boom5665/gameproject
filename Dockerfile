# ---------- Build Stage ----------
FROM node:18-alpine AS builder
WORKDIR /app
RUN apk add --no-cache python3 make g++

# รับค่าจาก compose
ARG NUXT_PUBLIC_SITE_URL
ARG NUXT_PUBLIC_SITE_ENV
ENV NUXT_PUBLIC_SITE_URL=${NUXT_PUBLIC_SITE_URL}
ENV NUXT_PUBLIC_SITE_ENV=${NUXT_PUBLIC_SITE_ENV}
# กรณ ใช้ CI build static
ENV NUXT_PUBLIC_SITE_URL=https://game-market-web.pirate168.com
ENV NUXT_PUBLIC_SITE_ENV=prod

COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run generate


# ---------- Runtime Stage ----------
FROM nginx:stable-alpine
# nginx conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# สร้างไฟล์ static แล้วค่อยคัดลอกออกเสิร์ฟ
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
