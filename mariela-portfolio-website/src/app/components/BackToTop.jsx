"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down past 400px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#00ADB5] text-white shadow-[0_0_15px_rgba(0,173,181,0.4)] transition-all duration-300 hover:bg-[#008d94] hover:scale-110 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
            }`}
            aria-label="Back to top"
        >
            <ArrowUpIcon className="h-6 w-6 font-bold" />
        </button>
    );
};

export default BackToTop;