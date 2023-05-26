# NAAPP Back-End

## What's in it for me ?

- Postgres Database
- A Adminer instance to manage the DB
- An Express Api
- Nginx based Web Server

# Installation guide

## What you need

| Runtime / Software |
| ------------------ |
| Docker             |
| Docker Compose     |

## Create a .env file following the .env.dist template

## Start the containers with Docker

```sh
docker-compose up --build
```
# You can access to :
- The API on :
```sh
localhost:5000/api
```
- Adminer on (Env value to log in):
```sh
localhost:8080
```
