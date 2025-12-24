'use client';
import { HoverEffect } from "./ui/hover-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield,
  Network,
  Lock,
  Bug,
  Fingerprint,
  Terminal,
  Code2,
  Activity, // New for SIEM
  Siren,    // New for Incident Response
  Search,   // New for Threat Hunting
  FileSearch // New for Forensics
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center dark:text-white text-black mb-12"
      >
        Cybersecurity Expertise
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HoverEffect items={[skill]} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const skills = [
  {
    title: "SIEM Operations",
    description: "Log analysis, rule creation, and dashboard management (Splunk, Wazuh, ELK)",
    link: "#",
    icon: <Activity className="w-6 h-6 text-cyan-500" />,
  },
  {
    title: "Incident Response",
    description: "Triage, containment, and eradication of security incidents (NIST/SANS)",
    link: "#",
    icon: <Siren className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Threat Hunting",
    description: "Proactive search for IoCs and TTPs using hypothesis-driven approaches",
    link: "#",
    icon: <Search className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "Network Forensics",
    description: "Packet capture analysis and traffic anomaly detection (Wireshark, Zeek)",
    link: "#",
    icon: <Network className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Endpoint Security (EDR)",
    description: "Endpoint monitoring and malware containment (CrowdStrike, Sysmon)",
    link: "#",
    icon: <Lock className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Malware Analysis",
    description: "Static and dynamic analysis of suspicious artifacts and binaries",
    link: "#",
    icon: <Bug className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Digital Forensics",
    description: "Evidence acquisition and analysis for disk and memory artifacts",
    link: "#",
    icon: <FileSearch className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Vulnerability Management",
    description: "Identifying and remediating known vulnerabilities (Nessus, OpenVAS)",
    link: "#",
    icon: <Shield className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "SOAR & Automation",
    description: "Automating repetitive security tasks and playbooks",
    link: "#",
    icon: <Code2 className="w-6 h-6 text-indigo-500" />,
  }
];