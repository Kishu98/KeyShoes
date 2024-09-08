package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

var db *sql.DB

func ConnectDB() {
	log.Println("Trying to connect to the Database")

	if err := godotenv.Load(".env"); err != nil {
		log.Fatal("Error reading the environment variables")
	}

	username := os.Getenv("USERNAME")
	password := os.Getenv("PASSWORD")
	dbname := os.Getenv("DATABASE_NAME")

	psqlInfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", username, password, dbname)
	var err error
	db, err = sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal("Not able to access the database", err)
	}
	// defer db.Close()

	// Ping to check the connection
	if err := db.Ping(); err != nil {
		log.Fatal("Not able to connect to the database", err)
	}

	log.Println("Connected to the Database", dbname)
}

func GetDB() *sql.DB {
	return db
}
