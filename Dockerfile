FROM node:latest
WORKDIR /frontEndPrj
RUN mkdir app
COPY package.json .
COPY webpack.config.js .
RUN npm install webpack webpack-cli webpack-dev-server
RUN npm install axios
RUN npm install react-router-dom
EXPOSE 3000
CMD ["npm", "run", "dev"]
