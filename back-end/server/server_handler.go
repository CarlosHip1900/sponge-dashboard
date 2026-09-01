package server

import (
	"encoding/json"
	"net/http"
)

func HandlerCreateServer(writer http.ResponseWriter, request *http.Request) {
	if request.Method != http.MethodPost {
		http.Error(writer, "Not allowed method", http.StatusMethodNotAllowed)
		return
	}

	var newServer Payload
	err := json.NewDecoder(request.Body).Decode(&newServer)
	if err != nil {
		http.Error(writer, err.Error(), http.StatusBadRequest)
		return
	}
}
