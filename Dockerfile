FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

ENV HTTP_PORT=80
ENV TCP_PORT=81
ENV API_KEY="pos-server"
ENV USB_DEVICE="/dev/usb/lp0"
ENV MESSAGE_MAX_LENGTH=1000
ENV POS_PRINTER_SERVER_VERSION="1.1.3"

EXPOSE ${HTTP_PORT}
EXPOSE ${TCP_PORT}

CMD [ "npm", "start" ]