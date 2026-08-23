import Card from "@/app/component/card";

export default function Home() {
    return (
        <div className="mx-auto space-y-8">
            <FastOverview/>
            <HealthActions/>
        </div>
    )
}
function FastOverview(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="bg-emerald-500/20 p-4 rounded-xl text-emerald-400">
                        <i className="fa-solid fa-server"></i>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Servers Online</p>
                        <h4 className="text-xl font-bold">13 / 16</h4>
                    </div>
                </div>
            </Card>

            <Card className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-4 rounded-xl text-blue-400">
                        <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Proxies</p>
                        <h4 className="text-xl font-bold">2 Online</h4>
                    </div>
                </div>
            </Card>

            <Card className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 p-4 rounded-xl text-purple-400">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Players Online</p>
                        <h4 className="text-xl font-bold">140</h4>
                    </div>
                </div>
            </Card>

            <Card variant="warning" className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="bg-yellow-500/20 p-4 rounded-xl text-yellow-400">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Alerts</p>
                        <h4 className="text-xl font-bold">1 Warning</h4>
                    </div>
                </div>
            </Card>

        </div>
    )
}

function HealthActions() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            <Card className="xl:col-span-2">
                <h4 className="font-semibold mb-4">System Health</h4>
                <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                        <span>Nodes</span>
                        <span className="text-emerald-400">All operational</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Proxies</span>
                        <span className="text-emerald-400">2 Online</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Database</span>
                        <span className="text-emerald-400">4 Online</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Disk Usage</span>
                        <span className="text-yellow-400">78% used</span>
                    </li>
                </ul>
            </Card>

            <Card>
                <h4 className="font-semibold mb-4">Quick Actions</h4>
                <div className="space-y-3">
                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 rounded-lg py-2 font-semibold cursor-pointer">
                        Create Server
                    </button>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg py-2 font-semibold cursor-pointer">
                        Create Proxy
                    </button>
                    <button className="w-full bg-gray-700 hover:bg-gray-600 rounded-lg py-2 cursor-pointer">
                        Manage Templates
                    </button>
                </div>
            </Card>

        </div>
    )
}