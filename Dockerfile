# ---------- Build Stage ----------
FROM node:16-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Generate static files
RUN npm run generate

# ---------- Production Stage ----------
FROM nginx:stable-alpine

# Copy static site to nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
