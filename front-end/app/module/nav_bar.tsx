'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav_bar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Nodes", path: "/nodes" },
        { name: "Proxies", path: "/proxies" },
        { name: "Database", path: "/database" },
    ];

    return (
        <nav className="bg-black/40 border border-cyan-400/20 rounded-full px-4 py-2 w-max">
            <ul className="flex items-center gap-3">
                {navItems.map((item) => {
                    const isSelected = pathname === item.path;

                    return (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`
                                    display-block px-6 py-2 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer
                                    ${isSelected
                                    ? "text-white bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-[0_0_15px_rgba(34,211,238,0.2)] border-2 border-cyan-400"
                                    : "text-neutral-400 hover:text-white border-2 border-transparent hover:border-blue-500 hover:bg-black"
                                }
                                `}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
