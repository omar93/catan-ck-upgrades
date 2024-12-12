# Step 1: Build the SvelteKit app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the SvelteKit app for production
RUN npm run build

# Step 2: Create an Nginx container for serving static files
FROM nginx:stable-alpine

# Copy the built SvelteKit static files to the Nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
