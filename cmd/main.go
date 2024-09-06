package main

import (
	db "backend/internals"

	"github.com/gin-gonic/gin"
)

func main() {

	db.ConnectDB()

	router := gin.Default()

	router.Run(":8080")
}
