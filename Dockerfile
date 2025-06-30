FROM node:14
WORKDIR /app
COPY server/ .
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
