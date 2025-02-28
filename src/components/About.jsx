"use client";
import { Timeline } from "./ui/timeline";

export const About = () => {
    const timelineData = [
        {
            title: "2022",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Basic networking
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Initiated a comprehensive study of networking fundamentals, establishing a solid understanding of key concepts and protocols.
                    </p>
                </div>
            )
        },
        {
            title: "2023",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Operating Systems
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Acquired foundational knowledge of operating systems, focusing on their core functionalities and overall architecture.
                    </p>
                </div>
            )
        },
        {
            title: "2024",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Advanced Operating Systems
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Deepened expertise in operating systems with an emphasis on Linux and Windows; mastered advanced command-line tools and techniques essential for penetration testing.
                    </p>
                </div>
            )
        },
        {
            title: "2025",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                    Penetration Testing
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                    Transitioned into practical application by conducting both web application and network penetration tests, applying advanced methodologies to assess and secure systems.
                    </p>
                </div>
            )
        }
    ];

    return (
        <section id="about" className="min-h-screen dark:bg-neutral-950">
            <Timeline data={timelineData} />
        </section>
    );
};