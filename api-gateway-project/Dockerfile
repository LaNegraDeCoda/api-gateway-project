# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy source code
COPY src ./src
COPY certs ./certs
COPY nginx.conf ./

# Expose the port the app runs on
EXPOSE 3000

# Start the Node.js server
CMD ["node", "src/server.js"]

