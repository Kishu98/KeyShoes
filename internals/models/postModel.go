package models

import (
	"database/sql"
	"log"
	"time"
)

type Blog struct {
	ID        int       `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"body"`
	CreatedAt time.Time `json:"created_at"`
}

func CreateBlog(db *sql.DB, blog Blog) (Blog, error) {
	log.Println("Creating a new Blog!")

	err := db.QueryRow("INSERT INTO posts(title, body) VALUES($1, $2) RETURNING id, title, body, created_at", blog.Title, blog.Content).Scan(&blog.ID, &blog.Title, &blog.Content, &blog.CreatedAt)
	if err != nil {
		return Blog{}, err
	}

	log.Println("Blog Created!")

	return blog, nil
}

func GetAllBlogs(db *sql.DB) ([]Blog, error) {
	log.Println("Fetching all blogs")

	rows, err := db.Query("SELECT * FROM posts ORDER BY created_at ASC")
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var blogs []Blog
	for rows.Next() {
		var blog Blog
		rows.Scan(&blog.ID, &blog.Title, &blog.Content, &blog.CreatedAt)
		blogs = append(blogs, blog)
	}

	return blogs, nil
}

func UpdateBlog(db *sql.DB, id int, blog Blog) (Blog, error) {
	log.Println("Updating Blog")

	err := db.QueryRow("UPDATE posts SET title=$1, body=$2 Where id=$3 RETURNING id, title, body, created_at", blog.Title, blog.Content, id).Scan(&blog.ID, &blog.Title, &blog.Content, &blog.CreatedAt)
	if err != nil {
		return Blog{}, err
	}

	log.Println("Blog updated!")

	return blog, nil
}

func GetBlog(db *sql.DB, id int) (Blog, error) {
	log.Println("Getting the blog")

	var blog Blog

	query := `SELECT * FROM posts WHERE id=$1`
	err := db.QueryRow(query, id).Scan(&blog.ID, &blog.Title, &blog.Content, &blog.CreatedAt)
	if err != nil {
		return Blog{}, err
	}

	return blog, nil
}

func DeleteBlog(db *sql.DB, id int) error {
	log.Println("Deleting...")

	query := `DELETE FROM posts WHERE id=$1`
	_, err := db.Exec(query, id)
	if err != nil {
		return err
	}
	return nil
}
