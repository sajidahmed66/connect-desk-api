# FROM node:18-alpine
# WORKDIR /usr/src/app
# COPY package.json yarn.lock ./
# RUN yarn install
# RUN npx prisma generate
# COPY prisma ./prisma/

# COPY . ./


# RUN yarn run build

# # Start the server using the production build
# CMD [ "node", "dist/main.js" ]

FROM node:18 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json yarn.lock ./
RUN npx prisma generate
COPY prisma ./prisma/

# Install app dependencies
RUN yarn install

COPY . .

RUN yarn run build

FROM node:18-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "run", "start:prod" ]