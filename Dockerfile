FROM node:20-bookworm-slim as runner

WORKDIR /app
COPY . .
RUN chown -R node:node /app
USER node
RUN npm ci
EXPOSE 2052

CMD [ "node", "index.mjs" ]