# Images to be built from
FROM node:8.15.1-alpine

# Create the working directory for this app's source code
RUN mkdir -p /src/app

# Set the working directory
WORKDIR /src/app

# Copy source code and move to specified directory
COPY . /src/app

# Set up container dependencies and environment
RUN npm install
RUN npm run react:pro

# Open port to traffic
EXPOSE 3002

# Commands to run on container spool
CMD [ "npm", "run", "server" ]
