package server

import "uuid"

type Template struct {
	imageURL  string
	legacy    bool
	namespace string
	autoScale bool
}

type Payload struct {
	Namespace string `json:"name"`
	MaxPlayer uint8  `json:"max_player"`
	Port      uint8  `json:"port"`
	Node      string `json:"node"`
	Map       string `json:"map"`
	MinRole   string `json:"min_role"`
}

type Running struct {
	name     string
	id       string
	node     string
	proxy    string
	platform string
	port     int8
	players  []Player
}

type Player struct {
	uuid           uuid.UUID
	name           string
	loginTimestamp uint64
}
