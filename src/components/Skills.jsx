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
  Radar
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
    title: "Penetration Testing",
    description: "Ethical hacking and vulnerability assessment using industry-standard tools",
    link: "#",
    icon: <Shield className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Network Security",
    description: "Firewall configuration, IDS/IPS systems, and secure network architecture",
    link: "#",
    icon: <Network className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Cryptography",
    description: "Implementation and analysis of encryption algorithms and protocols",
    link: "#",
    icon: <Lock className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Malware Analysis",
    description: "Reverse engineering and threat intelligence gathering",
    link: "#",
    icon: <Bug className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Digital Forensics",
    description: "Incident response and evidence preservation techniques",
    link: "#",
    icon: <Fingerprint className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Secure Coding",
    description: "OWASP Top 10 mitigation and secure SDLC practices",
    link: "#",
    icon: <Terminal className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "Web App Security",
    description: "SAST/DAST implementation and vulnerability remediation",
    link: "#",
    icon: <Code2 className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "Threat Hunting",
    description: "Proactive threat detection and analysis using SIEM tools",
    link: "#",
    icon: <Radar className="w-6 h-6 text-cyan-500" />,
  }
];