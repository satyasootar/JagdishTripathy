import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

const certifications = [
    {
        title: "Ethical Hacker",
        issuer: "Cisco",
        date: "2024",
        description: "Comprehensive training in offensive security, vulnerability assessment, and penetration testing methodologies.",
        image: "https://images.credly.com/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png",
        tags: ["Pentesting", "Network Security", "Risk Assessment"],
        url: "https://www.credly.com/badges/24c1b2fa-0505-43ce-95f6-7f08e04299d2"
    },
    {
        title: "Google Cybersecurity Professional",
        issuer: "Google",
        date: "2024",
        description: "Hands-on experience with Python, Linux, SQL, SIEM tools, and intrusion detection systems.",
        image: "https://images.credly.com/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png",
        tags: ["Python", "SIEM", "IDS/IPS"],
        url: "https://www.credly.com/badges/2786a4d6-99e3-45ab-a280-3956dd38065a"
    },
    {
        title: "IBM Cybersecurity Analyst",
        issuer: "IBM",
        date: "2023",
        description: "Advanced analysis techniques for threat intelligence, compliance frameworks, and network defense.",
        image: "https://images.credly.com/images/2f194645-bbf5-4f75-a48c-aba81d29e592/Coursera_20IBM_20Cybersecurity_20Analyst_20Professional_20Certificate_20V2.png",
        tags: ["Threat Intel", "Compliance", "Forensics"],
        url: "https://www.credly.com/badges/34ccd405-73c3-44db-9074-10cfb9f96fd3"
    },
    {
        title: "Linux & Private Cloud Admin",
        issuer: "IBM",
        date: "2023",
        description: "Mastery of Red Hat Enterprise Linux system administration and private cloud infrastructure.",
        image: "https://images.credly.com/images/aa6b6ee5-07b1-43f7-aad6-87ab946036ce/Linux_and_Private_Cloud_on_IBM_Systems_Specialization.png",
        tags: ["Red Hat", "Cloud Admin", "System Ops"],
        url: "https://www.credly.com/badges/34cec671-0d3e-4e9d-a6c6-8a559b54b73b"
    },
    {
        title: "OS Security & Administration",
        issuer: "Coursera",
        date: "2023",
        description: "Deep dive into hardening operating systems, patch management, and access control policies.",
        image: "https://images.credly.com/images/f821064c-8e80-4900-bec2-a799a62157e5/Coursera_20Operating_20Systems_20Overview_20Administration_20and_20Security.png",
        tags: ["Hardening", "Access Control", "Patching"],
        url: "https://www.credly.com/badges/f3f4cd33-10e5-4341-b2e1-41015b1b088a"
    },
    {
        title: "Database Vulnerabilities",
        issuer: "Coursera",
        date: "2023",
        description: "Specialized focus on SQL injection prevention, data privacy standards, and auditing.",
        image: "https://images.credly.com/images/ef9d282a-8f31-4b0f-9bbb-640a68ea4b7f/Coursera_20Database_20Essentials_20and_20Vulnerabilities.png",
        tags: ["SQLi", "Data Privacy", "Auditing"],
        url: "https://www.credly.com/badges/0fc732e0-70d1-45b7-b43a-710ed60f77c6"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white text-black mb-4">
                    Certifications
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl">
                    Validated expertise through industry-recognized certifications and verified badges.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center rounded-lg p-6 bg-white dark:bg-transparent dark:border-2 shadow-xl transition-all"
                    >
                        <div className="relative w-24 h-24 mb-6">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl" />
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="relative w-full h-full object-contain drop-shadow-md"
                            />
                        </div>

                        <h3 className="text-lg font-bold text-center text-neutral-900 dark:text-neutral-100 mb-1 leading-tight">
                            {cert.title}
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                            <span>{cert.issuer}</span>
                        </div>

                        <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center mb-4 line-clamp-3">
                            {cert.description}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                            {cert.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 backdrop-blur-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="mt-auto gap-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            onClick={() => window.open(cert.url, "_blank")}
                        >
                            Verify Credential <ExternalLink className="w-3 h-3" />
                        </Button>
                    </motion.div>
                ))}
            </div>



            <div className="flex justify-center mt-10">
                <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => window.open("https://www.credly.com/users/jagadishtripathy/badges", "_blank")}
                >
                    View Full Profile on Credly <Award className="w-4 h-4" />
                </Button>
            </div>
        </section >
    );
}
