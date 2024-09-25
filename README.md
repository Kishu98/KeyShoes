# Keyshoes Blog

A simple blog app, created using go and react, to jot down random thoughts and things.

You can find the blog deployed at https://kishu-jain.com.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

.env file in cmd folder:

`DATABASE_URL="postgres://[username]:[password]@[host]:[port]/[dbname]?sslmode=disable”`

`REACT_URL=http://localhost:5173`

.env file in web folder:

`VITE_BACKEND_URL=http://localhost:8080`

## Features

- Create, List, View, Delete blogs
- Authentication for personal use or multiple users managing the same blogs
- Store blogs in database

## Run Locally

Clone the project

```bash
  git clone https://github.com/Kishu98/blog-site
```

Go to the project directory

```bash
  cd blog-site
```

Go to cmd folder to run the backend (make sure to install postgres and run the migration file after creating the database)

```bash
  go run main.go
```

Go to web folder to run the frontend

```bash
  npm install
  npm run dev
```

## Usage

When running for the first time, to add user uncomment the 2nd line in main.go in /cmd folder and comment out the first line. Once the user has been added, you can comment and uncomment the first line below to login from next time.

```go
http.HandleFunc("/login", handlers.HandleAuth)
// http.HandleFunc("/login", handlers.HandleSignup)
```

## Feedback

If you have any feedback, please reach out to me at kishujain.1998@gmail.com

## Authors

- [@kishu98](https://www.github.com/Kishu98)
