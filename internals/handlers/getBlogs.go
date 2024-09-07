package handlers

import (
	"encoding/json"
	"net/http"
)

func getBlogs(w http.ResponseWriter) {
	var posts []Blog

	for _, post := range blogs {
		posts = append(posts, post)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(posts)
}
