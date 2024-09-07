package handlers

import (
	"net/http"
)

type Blog struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

var (
	blogs  = make(map[int]Blog)
	nextID = 1
)

func HandleBlogs(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case http.MethodGet:
		// Handle Get request
		getBlogs(w)
	case http.MethodPost:
		// Handle Post request
		createBlog(w, r)
	default:
		http.Error(w, "Method not allowed!", http.StatusMethodNotAllowed)
	}
}

func HandleBlog(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		getBlog(w, r)
	case http.MethodPut:
		updateBlog(w, r)
	case http.MethodDelete:
		deleteBlog(w, r)
	default:
		http.Error(w, "Method not allowed!", http.StatusMethodNotAllowed)
	}
}
