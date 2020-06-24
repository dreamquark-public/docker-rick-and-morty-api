FROM node:12.18.1-alpine

LABEL Author="Antoine AMARA <amara.antoine@gmail.com>"

# Global install yarn package manager and Git (git can be usefull for jest tests framework)
RUN apk update && apk add yarn git sqlite make

# Just a little package to easily add a free licence to a project
RUN npm install --global generate generate-license svgo

WORKDIR /workspace
COPY . /workspace/

EXPOSE 8080

ENV port=8080

RUN yarn install

CMD [ "yarn", "serve:dev" ]
