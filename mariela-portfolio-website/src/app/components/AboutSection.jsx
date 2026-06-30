"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#ADB7BE]">
                {/* Web Development */}
                <div>
                    <h4 className="text-white font-semibold mb-2 border-b border-slate-800 pb-1 text-sm tracking-wider uppercase">Web Dev</h4>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>React / Next.js</li>
                        <li>JavaScript / Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL / SQL</li>
                    </ul>
                </div>
                {/* UI/UX Design */}
                <div>
                    <h4 className="text-white font-semibold mb-2 border-b border-slate-800 pb-1 text-sm tracking-wider uppercase">UI/UX Design</h4>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>Figma</li>
                        <li>High-Fidelity Prototypes</li>
                        <li>Responsive Design</li>
                        <li>User-Centered Layouts</li>
                    </ul>
                </div>
                {/* Virtual Assistant */}
                <div>
                    <h4 className="text-white font-semibold mb-2 border-b border-slate-800 pb-1 text-sm tracking-wider uppercase">Virtual Assistant</h4>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>Inbox & Calendar Management</li>
                        <li>Google Workspace / M365</li>
                        <li>Notion & Scheduling Tools</li>
                        <li>Travel & File Organization</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-4 text-[#ADB7BE]">
                <li className="font-semibold text-white"> Bachelor of Science in Information Technology (BSIT)</li>
                <span className="text-sm text-slate-400 block mb-1">New Era University, Quezon City 2022 - 2026</span>
            </ul>
        )
    },
    {
        title: "Seminars and Certifications",
        id: "certification",
        content: (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-4 text-[#ADB7BE]">
                <li>Oracle Cloud Infrastructure 2023 AI Associate</li>
                <li>Oracle Cloud Data Management 2023 Associate</li>
                <li>Google Analytics / Analytics 101</li>
                <li>Modern Web Development (Full-Stack Deployment)</li>
                <li>Practical Guide to Agentic Swift Development</li>
                <li>Big Data Applications</li>
                <li>SQL and Relational Databases 101</li>
                <li>Web Penetration Testing 101</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="text-white py-16 px-4 xl:px-16" id="about">
            <div className="md:grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00ADB5] to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <Image 
                        src="/images/aboutsection.png" 
                        width={600} 
                        height={600} 
                        alt="About Me"
                        className="rounded-lg relative mx-auto md:mx-0"
                    />
                </div>

                <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4 text-[#00ADB5]">About Me</h2>
                    <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed">
                        I am a versatile digital professional blending technical execution with operational support. 
                        As a Web Developer and UI/UX Designer, I build clean, responsive front-ends 
                        and high-fidelity prototypes that turn ideas into smooth user experiences. 
                        Simultaneously, I leverage my technical organization skills as a Virtual Assistant, helping 
                        businesses optimize productivity through structured workspace configuration, inbox/calendar operations, 
                        and executive management.
                    </p>

                    <div className="flex flex-row justify-start mt-8 gap-4 border-b border-slate-800">
                        {TAB_DATA.map((item) => (
                            <TabButton 
                                key={item.id}
                                selectTab={() => handleTabChange(item.id)}
                                active={tab === item.id}
                            >
                                {item.title}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-6 min-h-[160px]">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;