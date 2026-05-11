"use client"; 
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
   return (
        <>
            <div className="group">
                <div
                    className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden border border-slate-800"
                    style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#0a0a0a] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                        <Link
                            href={gitUrl}
                            target="_blank" 
                            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#00ADB5] group/link"
                        >
                            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#00ADB5]" />
                        </Link>
                        
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#00ADB5] group/link"
                        >
                            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#00ADB5]" />
                        </button>
                    </div>
                </div>
                <div className="text-white rounded-b-xl bg-[#111111] py-6 px-4 border-x border-b border-slate-800">
                    <h5 className="text-xl font-semibold mb-2">{title}</h5>
                    <p className="text-[#ADB7BE] text-sm">{description}</p>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 p-4">
                    <div className="relative max-w-4xl w-full bg-[#181818] rounded-lg overflow-hidden border border-[#00ADB5]">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-[#00ADB5] z-[110]"
                        >
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                        <img 
                            src={imgUrl} 
                            alt={title} 
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <div className="p-6 bg-[#181818]">
                            <h3 className="text-2xl font-bold text-[#00ADB5]">{title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;