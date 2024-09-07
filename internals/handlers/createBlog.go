package handlers

import (
	"encoding/json"
	"net/http"
)

func createBlog(w http.ResponseWriter, r *http.Request) {
	var post Blog
	err := json.NewDecoder(r.Body).Decode(&post)
	if err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	post.ID = nextID
	blogs[nextID] = post
	nextID++

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(post)
}
