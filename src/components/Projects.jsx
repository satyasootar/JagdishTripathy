import { BentoGrid } from "@/components/ui/bento-grid";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

const itemsSample = [
    {
        title: "Email Phishing Detector",
        meta: "v2.4.1",
        description: "This project is an automated tool that detects, quarantines, and alerts about phishing emails by scanning URLs with the VirusTotal API and notifying the security team.",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Python", "Scappy", "AI", "Virus Tool"],
        colSpan: 2,
        repo: "https://github.com/jagdishtripathy/Email-phishing-detector"
    },
    {
        title: "Packet Sniffer",
        meta: "completed",
        description: "The Network Packet Sniffer captures and analyzes network packets in real-time, providing insights into IPs, MACs, protocols, and payloads.",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
        repo: "https://github.com/jagdishtripathy/Packet-sniffer"
    },
    {
        title: "Media Library",
        meta: "12GB used",
        description: "Cloud storage with intelligent content processing",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["Storage", "CDN"],
        colSpan: 2,
        repo: ""
    },
    {
        title: "Global Network",
        meta: "6 regions",
        description: "Multi-region deployment with edge computing",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
        repo: ""
    },
];

export default function Projects() {
    return <>
        <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-8 text-black">
            My Projects
        </h2>
        <BentoGrid items={itemsSample} />
    </>
}

