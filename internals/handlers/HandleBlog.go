package handlers

import (
	db "blog-site/internals/database"
	"blog-site/internals/models"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strconv"
)

// Main handler function
func HandleBlogs(w http.ResponseWriter, r *http.Request) {
	checkEnableCORS(w)
	switch r.Method {
	case http.MethodPost:
		createBlogHandler(w, r)
	case http.MethodGet:
		getAllBlogsHandler(w, r)

	}
}

func HandleBlog(w http.ResponseWriter, r *http.Request) {
	checkEnableCORS(w)
	switch r.Method {
	case http.MethodPut:
		updateBlogHandler(w, r)
	case http.MethodGet:
		getBlogHandler(w, r)
	case http.MethodDelete:
		deleteBlogHandler(w, r)
	}
}

// handler function to create a blog post
func createBlogHandler(w http.ResponseWriter, r *http.Request) {
	var blog models.Blog

	if err := json.NewDecoder(r.Body).Decode(&blog); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		os.Exit(1)
	}
	blog = models.CreateBlog(db.GetDB(), blog)

	// Sending back the new Blog as response
	jsonResponse(w, http.StatusCreated, blog)

}

// handler function to get all blogs
func getAllBlogsHandler(w http.ResponseWriter, r *http.Request) {
	blogs := models.GetAllBlogs(db.GetDB())

	jsonResponse(w, http.StatusOK, blogs)
}

// handler function to update blog
func updateBlogHandler(w http.ResponseWriter, r *http.Request) {
	var blog models.Blog

	json.NewDecoder(r.Body).Decode(&blog)

	id, err := strconv.Atoi(r.URL.Path[len("/blog/"):])
	if err != nil {
		log.Fatal(err)
	}
	blog = models.UpdateBlog(db.GetDB(), id, blog)

	jsonResponse(w, http.StatusNoContent, blog)
}

// handler function to get blog by id
func getBlogHandler(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.URL.Path[len("/blog/"):])
	if err != nil {
		log.Fatal(err)
	}

	blog := models.GetBlog(db.GetDB(), id)

	jsonResponse(w, http.StatusOK, blog)
}

func deleteBlogHandler(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.URL.Path[len("/blog/"):])
	if err != nil {
		log.Fatal(err)
	}

	blog := models.GetBlog(db.GetDB(), id)
	models.DeleteBlog(db.GetDB(), id)

	jsonResponse(w, http.StatusNoContent, blog)
}

func jsonResponse(w http.ResponseWriter, statusCode int, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	if err := json.NewEncoder(w).Encode(data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func checkEnableCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
}
