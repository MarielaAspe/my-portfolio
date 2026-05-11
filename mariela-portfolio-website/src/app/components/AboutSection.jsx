"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="grid grid-cols-2 gap-2 list-disc pl-4 text-[#ADB7BE]">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-4 text-[#ADB7BE]">
                <li>New Era University, Quezon City 2022-2026</li>
            </ul>
        )
    },
    {
        title: "Seminars and Certifications",
        id: "certification",
        content: (
            <ul className="list-disc pl-4 text-[#ADB7BE]">
                <li>Analytics 101 for Businesses</li>
                <li>Big Data Applications</li>
                <li>Web Penetration Testing 101</li>
                <li>Modern Web Development: How a Full Stack Web App Goes Live</li>
                <li>SQL and Relational Databases 101</li>
                <li>Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate</li>
                <li>Oracle CLoud Data Management 2023 Certified Foundation Associate</li>
                <li>Google Analytics</li>
                <li>Practical Guide to Agentic Swift Development</li>
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
                        className="rounded-lg relative"
                    />
                </div>

                <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4 text-[#00ADB5]">About Me</h2>
                    <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed">
                        I'm a passionate Front-End Web Developer with a strong focus on creating 
                        clean, responsive, and user-centered designs. I also specialize in building 
                        high-fidelity UI/UX prototypes that transform ideas into visually engaging 
                        digital experiences.
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
                    <div className="mt-6 min-h-[140px]">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;