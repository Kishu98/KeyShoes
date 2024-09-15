package main

import (
	db "blog-site/internals/database"
	"blog-site/internals/handlers"
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	// Connecting to the database
	err := db.ConnectDB()
	if err != nil {
		log.Fatal(err.Error())
	}

	// Creating a new HTTP server
	srv := &http.Server{
		Addr:    ":8080",
		Handler: nil,
	}

	// Routes for this app
	http.HandleFunc("/blog", handlers.HandleBlogs)
	http.HandleFunc("/blog/", handlers.HandleBlog)
	http.HandleFunc("/login", handlers.HandleAuth)
	// http.HandleFunc("/signup", handlers.HandleSignup)

	// Channel to listen for interupt or terminate signals
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)

	// Starting server in a goroutine
	go func() {
		log.Println("Server is running on port 8080...")
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("ListenAndServe(): %v", err)
		}
	}()

	<-stop

	log.Println("Shutting down server...")

	// for graceful shutdown
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("Server Shutdown Failed: %v", err)
	}

	log.Println("Server exited properly")
}
