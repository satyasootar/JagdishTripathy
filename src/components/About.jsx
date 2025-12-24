"use client";
import { Timeline } from "./ui/timeline";
import { TextReveal } from "./ui/text-reveal";

export const About = () => {
    const timelineData = [
        {
            title: "2022",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Basic networking
                    </h4>
                    <TextReveal
                        text="Initiated a comprehensive study of networking fundamentals, establishing a solid understanding of key concepts and protocols."
                        className="text-neutral-600 dark:text-neutral-400"
                    />
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
                    <TextReveal
                        text="Acquired foundational knowledge of operating systems, focusing on their core functionalities and overall architecture."
                        className="text-neutral-600 dark:text-neutral-400"
                    />
                </div>
            )
        },
        {
            title: "2024",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Defensive Security & Log Analysis
                    </h4>
                    <TextReveal
                        text="Deepened expertise in Blue Team operations, mastering log analysis (Sysmon, Windows Event Logs) and detecting anomalies using SIEM concepts."
                        className="text-neutral-600 dark:text-neutral-400"
                    />
                </div>
            )
        },
        {
            title: "2025",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Security Operations Center
                    </h4>
                    <TextReveal
                        text="Specializing in real-time threat monitoring, incident response, and threat hunting using industry-standard SIEM/EDR tools like Splunk and Wazuh."
                        className="text-neutral-600 dark:text-neutral-400"
                    />
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