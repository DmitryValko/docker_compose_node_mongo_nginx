FROM node:12-alpine
WORKDIR /docker-mongo
COPY . .
RUN npm install --production
ENV NODE_ENV=development 
ENV PORT=3000
ENV ENVIRONMENT=DEV
ENV BASE_URL=http://localhost:3000
ENV MONGO_URI=mongodb://userName:UserPassword@database:27017/test?authSource=admin
CMD ["node", "back/index.js"]