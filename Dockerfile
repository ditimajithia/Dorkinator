# Use the official Node.js image as the base image
FROM node:lts

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4173
EXPOSE 5173

# Start the React application
RUN npm run build
CMD ["npm", "run","preview"]
