FROM node:16-alpine AS build-stage

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn #--frozen-lockfile

COPY . /app
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
