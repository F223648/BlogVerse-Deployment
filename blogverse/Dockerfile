# Use an official Node runtime
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the React code
COPY . .

# Expose the React development port
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start"]