"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [navBarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] bg-opacity-95 backdrop-blur-sm border-b border-slate-800">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:px-12">
                <Link href={"/"} className="text-xl md:text-3xl text-white font-bold tracking-tighter">
                    ASPE<span className="text-[#00ADB5]">MARIELA</span>
                </Link>

                <div className="mobile-menu block md:hidden">
                    {!navBarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="p-2 text-slate-200">
                            <Bars3Icon className="h-7 w-7" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="p-2 text-slate-200">
                            <XMarkIcon className="h-7 w-7" />
                        </button>
                    )}
                </div>

                <div className="menu hidden md:block md:w-auto">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;