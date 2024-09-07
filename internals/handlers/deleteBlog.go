package handlers

import (
	"net/http"
	"strconv"
)

func deleteBlog(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.URL.Path[len("/posts/"):])
	if err != nil {
		http.Error(w, "Invalid post ID", http.StatusBadRequest)
		return
	}

	_, exists := blogs[id]
	if !exists {
		http.Error(w, "Post not found!", http.StatusNotFound)
		return
	}

	delete(blogs, id)

	w.WriteHeader(http.StatusNoContent)
}
