package proxies

import (
	"back-end/server"
	"uuid"
)

type Proxy struct {
	servers          []server.Running
	connectedPlayers []ProxiedPlayer
}

type Payload struct {
	MaxServers    uint8
	OnlyPlatforms string
}

type ProxiedPlayer struct {
	LoginTimestamp uint64    `json:"login_timestamp"`
	Uuid           uuid.UUID `json:"uuid"`
	Name           string    `json:"name"`
	CurrentServer  string    `json:"current_server_name"`
	Role           string    `json:"role"`
	AccountState   bool      `json:"account_state"`
}
