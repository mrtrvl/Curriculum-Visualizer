# Curriculum-Visualizer

## Setting up MongoDB
- docker network create some-network
- docker run --network some-network --name mongo -p 27017:27017 -v ./mongodb:/data/db -d mongo
- docker run -it --rm -p 8081:8081 --network some-network mongo-express

## Importing Data

- node importData.js
