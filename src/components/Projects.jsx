import { BentoGrid } from "@/components/ui/bento-grid";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    HeartHandshake,
    Video,
    Globe, 
    Bot
} from "lucide-react";

const itemsSample = [
    {
        title: "Email Phishing Detector",
        meta: "Real-Time",
        description: "An automated tool that detects, quarantines, and alerts about phishing emails by scanning URLs with the VirusTotal API and notifying the security team.",
        // Changed icon to Clock with a red tone for urgency
        icon: <Clock className="w-4 h-4 text-red-500" />,
        status: "Active",
        tags: ["Phishing", "Detection", "Email Security", "Automation"],
        colSpan: 2,
        repo: "https://github.com/jagdishtripathy/Email-phishing-detector"
    },
    {
        title: "Packet Sniffer",
        meta: "Deep Packet Analysis",
        description: "Captures and analyzes network packets in real-time, providing insights into IP addresses, MACs, protocols, and payloads to uncover potential security threats.",

        icon: <Star className="w-4 h-4 text-green-500" />,
        status: "Secured",
        tags: ["Network", "Sniffing", "Security", "Real-Time"],
        repo: "https://github.com/jagdishtripathy/Packet-sniffer"
    },
    {
        title: "Password Complexity Checker",
        meta: "Compliance Verified",
        description: "A Python tool that evaluates the strength of passwords based on defined complexity criteria, helping users create secure and compliant passwords.",

        icon: <TrendingUp className="w-4 h-4 text-orange-500" />,
        tags: ["Passwords", "Compliance", "Security"],
        colSpan: 2,
        repo: "https://github.com/jagdishtripathy/Password-complexity-checker"
    },
    {
        title: "Image Encryption",
        meta: "Distributed Monitoring",
        description: "A python based CLI tool which encrypt your photo and documents and make you anonymous on the internet.",

        icon: <CheckCircle className="w-4 h-4 text-teal-500" />,
        status: "Active",
        tags: ["Threat Intelligence", "Global", "Monitoring"],
        repo: "https://github.com/jagdishtripathy/Image-Encryption-tool"
    },
    {
        title: "CTF Helper",
        meta: "Begineer Friendly",
        description: "CTF Helper is a powerful, modular Command Line Interface (CLI) tool designed for Capture The Flag (CTF) competitions and cybersecurity tasks. Whether you're a beginner or an experienced security professional, this tool provides essential features like decoding, JWT analysis, web exploitation, OSINT tools and many more—all in one place.",

        icon: <HeartHandshake className="w-4 h-4 text-blue-500" />,
        status: "Active",
        colSpan: 2,
        tags: ["Capture The Flag", "Analysis", "Decoding"],
        repo: "https://github.com/jagdishtripathy/ctf-helper"
    },
    {
    title: "TinyAI - Cybersecurity AI Assistant",
    meta: "AI-Powered SIEM Assistant",
    description: "An intelligent cybersecurity assistant for analyzing logs, Wazuh alerts, and VAPT queries using LLMs. Supports hybrid mode, typing animation, memory, and real-time responses.",
        
    icon: <Bot className="w-4 h-4 text-purple-500" />,
    status: "Stable",
    tags: ["SIEM", "AI", "Wazuh", "Log Analysis", "Cybersecurity"],
    repo: "https://github.com/jagdishtripathy/TinyAI"
    },
];

export default function Projects() {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-8 text-black">
                My Projects
            </h2>
            <BentoGrid items={itemsSample} />
        </>
    );
}
