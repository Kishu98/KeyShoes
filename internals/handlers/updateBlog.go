package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
)

func updateBlog(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.URL.Path[len("/posts/"):])
	if err != nil {
		http.Error(w, "Invalid post ID", http.StatusBadRequest)
		return
	}

	var updatedBlog Blog
	err = json.NewDecoder(r.Body).Decode(&updatedBlog)
	if err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	_, exists := blogs[id]
	if !exists {
		http.Error(w, "Post not found", http.StatusNotFound)
		return
	}

	updatedBlog.ID = id
	blogs[id] = updatedBlog

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(updatedBlog)
}
