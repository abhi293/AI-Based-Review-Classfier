# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN npm install

# Expose port for the backend
EXPOSE 5000

# Start the Node.js backend
CMD ["node", "server.js"]
