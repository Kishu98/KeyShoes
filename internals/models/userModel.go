package models

import (
	"database/sql"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	ID       int    `json:"id"`
	USERNAME string `json:"username"`
	PASSWORD string `json:"password"`
}

var jwtSecret = []byte(os.Getenv("SECRET_KEY"))

func CheckPassword(db *sql.DB, user User) (string, error) {
	var passwordHash string
	err := db.QueryRow("SELECT password_hash FROM users WHERE username=$1", user.USERNAME).Scan(&passwordHash)
	if err != nil {
		return "", err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(passwordHash), []byte(user.PASSWORD)); err != nil {
		return "", err
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": user.USERNAME,
		"exp":      time.Now().Add(time.Hour * 1).Unix(),
	})

	tokenString, err := token.SignedString(jwtSecret)
	if err != nil {
		return "", err
	}

	return tokenString, err
}

func CreateUser(db *sql.DB, username string, hashedPassword []byte) error {

	_, err := db.Exec("INSERT INTO users (username, password_hash) VALUES ($1, $2)", username, string(hashedPassword))
	if err != nil {
		return err
	}
	return nil
}

func GenerateHashedPassword(db *sql.DB, userPassword string) ([]byte, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(userPassword), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}
	return hashedPassword, err
}
