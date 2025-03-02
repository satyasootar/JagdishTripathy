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
        status: "Under Evaluation",
        tags: ["Threat Intelligence", "Global", "Monitoring"],
        repo: "https://github.com/jagdishtripathy/Image-Encryption-tool"
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
