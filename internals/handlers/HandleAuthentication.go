package handlers

import (
	db "blog-site/internals/database"
	"blog-site/internals/models"
	"encoding/json"
	"net/http"
)

func HandleAuth(w http.ResponseWriter, r *http.Request) {
	checkEnableCORS(w)
	if r.Method == http.MethodOptions {
		return
	}
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request!", http.StatusMethodNotAllowed)
		return
	}

	var user models.User

	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	token, err := models.CheckPassword(db.GetDB(), user)
	if err != nil {
		http.Error(w, "Invalid username or password", http.StatusUnauthorized)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusAccepted)
	json.NewEncoder(w).Encode(map[string]string{"token": token})
}

func HandleSignup(w http.ResponseWriter, r *http.Request) {
	checkEnableCORS(w)
	if r.Method == http.MethodOptions {
		return
	}
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid Request!", http.StatusMethodNotAllowed)
		return
	}

	var user models.User

	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	hashedPassword, err := models.GenerateHashedPassword(db.GetDB(), user.PASSWORD)
	if err != nil {
		http.Error(w, "Failed to create user. Try Again!", http.StatusInternalServerError)
		return
	}

	err = models.CreateUser(db.GetDB(), user.USERNAME, hashedPassword)
	if err != nil {
		http.Error(w, "User already exists", http.StatusConflict)
		return
	}

}

// func checkEnableCORS(w http.ResponseWriter) {
// 	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
// 	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
// 	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
// }
