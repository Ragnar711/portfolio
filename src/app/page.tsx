"use client";

import { useState } from "react";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Download,
    Menu,
    X,
} from "lucide-react";
import Image from "next/image";
import drone from "../../public/drone.jpg";

const Page = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Navigation items
    const navItems = [
        { id: "home", label: "Home" },
        { id: "projects", label: "Projects" },
        { id: "about", label: "About Me" },
        { id: "contact", label: "Contact" },
    ];

    // Sample projects data - easily editable
    const projects = [
        {
            id: 1,
            title: "Autonomous Land Drone Navigation",
            description:
                "Implemented an autonomous GPS-based navigation system for a land drone using ROS2 and Ubuntu server. Developed custom sensor drivers for sonar and motor encoders, optimized odometry and obstacle detection, and enabled multi-drone communication.",
            image: drone,
            github: "https://github.com/Ragnar711/land_drone",
            demo: "https://your-demo-link.com",
            tags: [
                "Python",
                "ROS2",
                "Robotics",
                "Sensor Integration",
                "Autonomous Systems",
            ],
        },
    ];

    // Skills data - easily editable
    const skills = [
        "ROS2",
        "Python",
        "Robotics",
        "Embedded Systems",
        "Docker",
        "Linux",
        "GitLab",
        "CI/CD",
        "WebSockets",
        "REST APIs",
        "ReactJS",
        "NodeJS",
        "Git",
        "Agile Methodologies",
        "JavaScript",
    ];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Navigation Header */}
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-xl font-bold text-blue-600">
                            Mohamed Aziz Bechaib
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        activeSection === item.id
                                            ? "text-blue-600 bg-blue-50"
                                            : "text-gray-700 hover:text-blue-600"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                }
                                className="p-2 rounded-md text-gray-700 hover:text-blue-600"
                            >
                                {mobileMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Home Section */}
            <section id="home" className="pt-16 min-h-screen flex items-center">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Hi, I&apos;m{" "}
                            <span className="text-blue-600">
                                Mohamed Aziz Bechaib
                            </span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl text-gray-600 mb-8">
                            Mechatronics Engineer
                        </h2>
                        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                            Passionate about bridging the gap between hardware
                            and software, creating innovative solutions that
                            bring ideas to life.
                        </p>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                        >
                            View My Projects
                        </button>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Projects
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Here are some of the projects I&apos;ve worked on,
                            showcasing my skills in both hardware and software
                            development.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                                        >
                                            <Github
                                                size={20}
                                                className="mr-2"
                                            />
                                            Code
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                                            >
                                                <ExternalLink
                                                    size={20}
                                                    className="mr-2"
                                                />
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                About Me
                            </h2>
                            <p className="text-lg text-gray-600">
                                Get to know more about my background, skills,
                                and aspirations.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Image
                                    src="/me.jpg"
                                    alt="Profile"
                                    width={400}
                                    height={400}
                                />
                            </div>

                            <div>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    I&apos;m a Mechatronics Engineer with a
                                    passion for software development. My unique
                                    background allows me to work seamlessly
                                    across hardware and software domains,
                                    creating integrated solutions that solve
                                    real-world problems.
                                </p>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    With experience in robotics, embedded
                                    systems, and full-stack development, I enjoy
                                    tackling complex challenges that require
                                    both technical depth and creative
                                    problem-solving.
                                </p>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    I&apos;m always eager to learn new
                                    technologies and collaborate on innovative
                                    projects that push the boundaries of
                                    what&apos;s possible.
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4">
                                        Skills & Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white text-gray-700 rounded-full border"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href="/resume.pdf"
                                    download
                                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    <Download size={20} className="mr-2" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            I&apos;m always open to discussing new
                            opportunities, interesting projects, or just having
                            a conversation about technology.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-gray-50 rounded-lg p-8 mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <Mail
                                    size={24}
                                    className="text-blue-600 mr-3"
                                />
                                <span className="text-lg font-medium">
                                    Email
                                </span>
                            </div>
                            <a
                                href="mailto:azizbechaib711@gmail.com"
                                className="text-blue-600 hover:text-blue-700 text-lg font-medium"
                            >
                                azizbechaib711@gmail.com
                            </a>
                        </div>

                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://github.com/Ragnar711"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                <Github size={24} className="text-gray-700" />
                            </a>
                            <a
                                href="https://linkedin.com/in/medazizbechaib"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                <Linkedin size={24} className="text-gray-700" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">
                        © 2025 Mohamed Aziz Bechaib.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Page;
