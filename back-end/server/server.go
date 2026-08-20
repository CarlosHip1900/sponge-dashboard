package server

import "uuid"

type Server struct {
	name             string
	id               string
	node             string
	proxy            string
	platform         string
	connectedPlayers []ServerPlayer
}

type ServerPlayer struct {
	uuid            uuid.UUID
	name            string
	currentServerId string
	loginTimestamp  uint64
}
