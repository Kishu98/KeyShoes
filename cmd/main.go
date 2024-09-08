package main

import (
	db "blog-site/internals/database"
	"blog-site/internals/handlers"
	"net/http"
)

func main() {
	// Connecting to the database
	db.ConnectDB()

	// Routes for this app
	http.HandleFunc("/blog", handlers.HandleBlogs)
	http.HandleFunc("/blog/", handlers.HandleBlog)

	// Server listening at port :8080
	http.ListenAndServe(":8080", nil)

}
