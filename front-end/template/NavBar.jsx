import React, { useState } from "react";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const navItems = ["Home", "Nodes", "Proxies", "Database"];

    return (
        <nav className="bg-black/40 border border-cyan-400/20 rounded-full px-4 py-2 w-max">
            <ul className="flex items-center gap-3">
                {navItems.map((item) => {
                    const isSelected = activeTab === item;

                    const liClass = isSelected
                        ? "px-6 py-2 rounded-full border-2 border-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-padding"
                        : "";

                    const buttonClass = isSelected
                        ? "font-bold text-sm text-white cursor-pointer"
                        : "px-6 py-2 rounded-full font-bold text-sm text-neutral-400 hover:border hover:border-blue-500 hover:bg-black transition-all cursor-pointer";

                    return (
                        <li key={item} className={liClass}>
                            <button
                                type="button"
                                className={buttonClass}
                                onClick={() => setActiveTab(item)}
                            >
                                {item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
