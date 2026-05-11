"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "Booking System Website (SkyEast Travels)",
        description: "Front-end login/registration system (HTML, CSS, JS, PHP)",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/https://github.com/MarielaAspe/SkyEase-Travels",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "E-Commerce Website (Trendify)",
        description: "Built with Bootstrap 4, PHP, JavaScript, and MySQL. Features full CRUD and analytics.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/MarielaAspe/Trendify",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Mobile Learning App (DIGIKNOW)",
        description: "Java-based Android app for digital literacy with gamified streaks.",
        image: "/images/projects/3.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "IoT Security (ParkGuard)",
        description: "Integrated security management system with real-time tracking.",
        image: "/images/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/MarielaAspe/Park-Guard",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "MidFlights Booking",
        description: "High-fidelity Figma prototype for flight booking.",
        image: "/images/projects/5.png",
        tag: ["All", "UI/UX"],
        gitUrl: "/https://www.figma.com/proto/y3HjmLnTp9kbnuhdWqfP7P/prototype?node-id=4-2&starting-point-node-id=4%3A2&t=aJy48qWiFMyuvZoT-1",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "YumFeast Reservation",
        description: "Restaurant reservation UI/UX design.",
        image: "/images/projects/6.png",
        tag: ["All", "UI/UX"],
        gitUrl: "/https://www.figma.com/proto/y3HjmLnTp9kbnuhdWqfP7P/prototype?node-id=11-12&p=f&t=URflc4Kmj3TjtaSu-0&scaling=scale-down&content-scaling=fixed&page-id=9%3A8&starting-point-node-id=11%3A12",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <section id="projects" className="py-20"> 
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
                My <span className="text-[#00ADB5]">Projects</span>
            </h2>
            
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;