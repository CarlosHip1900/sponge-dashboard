package main

import (
	"log"
	_ "log"
	"net/http"
	_ "net/http"
)

func main() {
	log.Println("Starting BACK_END_SERVER in port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
