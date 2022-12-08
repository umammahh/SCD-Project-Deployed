FROM node:current-alpine
COPY package*.json .
RUN npm install 
COPY . .
ENV PORT=3700
EXPOSE 3700
CMD [ "node", "app.js" ]