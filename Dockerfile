FROM golang:1.18.2-alpine as backend-builder

WORKDIR /app
COPY ./backend .
ENV GOOS=linux
ENV GOARCH=amd64
RUN go build -o server


FROM npm:18-alpine3.14 as frontend-builder
WORKDIR /app
COPY ./frontend .
RUN npm i
RUN npm run build

FROM nginx:latest
WORKDIR /app
COPY --from=backend-builder /app/server .
COPY --from=frontend-builder /app/build/static .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]