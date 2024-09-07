package main

import (
	db "blog-site/internals"
	"blog-site/internals/handlers"
	"log"
	"net/http"
)

func main() {

	db.ConnectDB()

	http.HandleFunc("/blogs", handlers.HandleBlogs)
	http.HandleFunc("/blogs/", handlers.HandleBlog)

	log.Println("Server starting on port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Could not start server: %s\n", err.Error())
	}
}
