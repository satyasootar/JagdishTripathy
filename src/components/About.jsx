"use client";
import { Timeline } from "./ui/timeline";

export const About = () => {
    const timelineData = [
        {
            title: "2019",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        CompTIA Security+ Certified
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Earned foundational cybersecurity certification covering network security, threats, and vulnerabilities.
                    </p>
                </div>
            )
        },
        {
            title: "2020",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        CEH (Certified Ethical Hacker)
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Mastered ethical hacking techniques including footprinting, scanning, and system hacking.
                    </p>
                </div>
            )
        },
        {
            title: "2021",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        OSCP Certification
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Successfully completed Offensive Security's Penetration Testing with Kali Linux course.
                    </p>
                </div>
            )
        },
        {
            title: "2022",
            content: (
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Lead Penetration Tester
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Conducted 50+ security assessments for enterprise networks and web applications.
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