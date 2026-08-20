package server

import "uuid"

type TemplateServer struct {
	imageURL  string
	legacy    bool
	namespace string
	autoScale bool
}

type RunningServer struct {
	name             string
	id               string
	node             string
	proxy            string
	platform         string
	port             int8
	connectedPlayers []ConnectedServerPlayer
}

type ConnectedServerPlayer struct {
	uuid            uuid.UUID
	name            string
	currentServerId string
	loginTimestamp  uint64
}
