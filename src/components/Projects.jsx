import { BentoGrid } from "@/components/ui/bento-grid";

import {
    ShieldAlert,
    Activity,
    FileSearch,
    ShieldCheck,
    Lock,
    Bot
} from "lucide-react";

const itemsSample = [
    {
        title: "SOC-Automation",
        meta: "Splunk & SOAR",
        description: "AI-powered SOC automation ecosystem using Splunk, n8n, and Gemini models to analyze alerts and automate incident reporting via Slack.",
        icon: <Bot className="w-4 h-4 text-purple-500" />,
        status: "Active",
        tags: ["Splunk", "SOAR", "n8n", "AI Defense"],
        colSpan: 2,
        repo: "https://github.com/Jagadishtripathy/SOC-Automation"
    },
    {
        title: "TinyAI - Security Assistant",
        meta: "Local-First AI",
        description: "A privacy-focused AI assistant for SIEM analysis and Wazuh alerts. Supports hybrid mode for analyzing logs without exposing data.",
        icon: <ShieldCheck className="w-4 h-4 text-green-500" />,
        status: "Stable",
        tags: ["Wazuh", "LLM", "Log Analysis", "Python"],
        repo: "https://github.com/Jagadishtripathy/TinyAI"
    },
    {
        title: "SMEs-CyberShield",
        meta: "Lightweight SIEM",
        description: "A custom SIEM dashboard for Small/Medium Enterprises featuring Suricata EVE log parsing, real-time alerting, and Elasticsearch integration.",
        icon: <Activity className="w-4 h-4 text-orange-500" />,
        tags: ["SIEM", "Suricata", "Elasticsearch", "Flask"],
        colSpan: 2,
        repo: "https://github.com/Jagadishtripathy/SMEs-CyberShield"
    },
    {
        title: "PCAP-Hunter",
        meta: "Network Forensics",
        description: "Advanced packet capture analysis tool to discover hidden data, extract artifacts, and identify embedded threats within network traffic.",
        icon: <FileSearch className="w-4 h-4 text-blue-500" />,
        status: "Active",
        tags: ["Forensics", "PCAP", "Network Analysis"],
        repo: "https://github.com/Jagadishtripathy/PCAP-Hunter"
    },
    {
        title: "Email Phishing Detector",
        meta: "Threat Detection",
        description: "Automated tool for detecting and quarantining phishing attempts. Analyzes headers and URLs to block malicious campaigns.",
        icon: <ShieldAlert className="w-4 h-4 text-red-500" />,
        status: "Active",
        colSpan: 2,
        tags: ["Phishing", "Email Security", "Defense"],
        repo: "https://github.com/Jagadishtripathy/Email-phishing-detector"
    },
    {
        title: "Image Encryption Tool",
        meta: "Data Privacy",
        description: "Secure image encryption utility for data loss prevention (DLP). Ensures sensitive visual data remains protected during transmission.",
        icon: <Lock className="w-4 h-4 text-teal-500" />,
        status: "Stable",
        tags: ["Cryptography", "DLP", "Privacy"],
        repo: "https://github.com/Jagadishtripathy/Image-Encryption-tool"
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
