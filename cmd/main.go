package main

import (
	db "blog-site/internals"
	"fmt"
	"log"
	"net/http"
)

func main() {

	db.ConnectDB()

	http.HandleFunc("/", helloHandler)

	log.Println("Server starting on port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Could not start server: %s\n", err.Error())
	}
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, World!")
}
