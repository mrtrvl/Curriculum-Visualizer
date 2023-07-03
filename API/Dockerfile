FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4000

# Define the command to start the application
CMD [ "npm", "start" ]