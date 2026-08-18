package server

type ServerPlatform int

const (
	Minestom ServerPlatform = iota
	Bukkit
)

var platforms = map[ServerPlatform]string{
	Minestom: "minestom",
	Bukkit:   "bukkit",
}

func (s ServerPlatform) platformName() string {
	return platforms[s]
}

type Server struct {
	name     string
	id       string
	node     string
	proxy    string
	platform ServerPlatform
}
