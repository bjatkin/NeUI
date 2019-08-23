package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/NeUIUpdate", NeUIUpdate)
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.ListenAndServe(":8080", nil)
}
