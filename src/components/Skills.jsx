import { HoverEffect } from "./ui/hover-effect";

export default function Skills() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white text-black mb-8">
                My Skills
            </h2>
            <HoverEffect items={projects} />
        </section>
    );
}

// Your project list
export const projects = [
    {
        title: "SYNBOT",
        description:
            "An AI-powered bot using Google Gemini API, designed for Synergy Institute of Engineering and Technology.",
        link: "https://github.com/satyasootar/SYNBOT2.0",
    },
    {
        title: "Little Lemon",
        description:
            "A restaurant booking website with real-time table reservation system and smooth UI.",
        link: "https://github.com/satyasootar/Little-Lemon",
    },
    {
        title: "Amazon Clone",
        description:
            "A front-end clone of the Amazon homepage with responsive design and modern UI.",
        link: "https://github.com/satyasootar/Amazon-Clone",
    },
    {
        title: "WordWise",
        description:
            "A blog platform with rich-text editing, dark mode support, and responsive UI.",
        link: "https://github.com/satyasootar/WordWise",
    },
];
