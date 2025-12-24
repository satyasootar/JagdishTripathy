import { useEffect, useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveRight, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";

// Animation parameters (adjust these values as needed)
const NODE_COUNT = 25;          // Change number of nodes
const CONNECTION_DISTANCE = 50; // Change connection distance
const NODE_SPEED = 0.2;         // Change movement speed (0.1-1)

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [nodes, setNodes] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const titles = useMemo(() => ["SOC Analyst", "Threat Hunter", "Incident Responder", "BTLO Global Top 1%"], []);

  // Initialize nodes
  const initNodes = useCallback(() => {
    const newNodes = Array.from({ length: NODE_COUNT }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * NODE_SPEED,
      vy: (Math.random() - 0.5) * NODE_SPEED,
    }));
    setNodes(newNodes);
  }, []);

  // Update node positions
  const updateNodes = useCallback(() => {
    setNodes(prevNodes => prevNodes.map(node => ({
      x: (node.x + node.vx) % 100,
      y: (node.y + node.vy) % 100,
      vx: node.vx,
      vy: node.vy,
    })));
  }, []);

  useEffect(() => {
    initNodes();
    const interval = setInterval(updateNodes, 50);
    return () => clearInterval(interval);
  }, [initNodes, updateNodes]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  return (
    <div className="w-full relative overflow-hidden min-h-screen">
      {/* Dynamic Node Background */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none"
        onMouseMove={handleMouseMove}
      >
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node, i) => (
            <g key={i}>
              {/* Node connections */}
              {nodes.slice(i + 1).map((otherNode, j) => {
                const distance = Math.sqrt(
                  Math.pow(node.x - otherNode.x, 2) +
                  Math.pow(node.y - otherNode.y, 2)
                );
                if (distance < CONNECTION_DISTANCE) {
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${otherNode.x}%`}
                      y2={`${otherNode.y}%`}
                      className="stroke-foreground/40 dark:stroke-foreground/40"
                      strokeWidth={0.1 - (distance / CONNECTION_DISTANCE)}
                    />
                  )
                }
                return null;
              })}
              {/* Node dots */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="1.5"
                className="fill-foreground/20 dark:fill-foreground/30"
                animate={{
                  transition: { type: "spring", stiffness: 100 }
                }}
              />
            </g>
          ))}
        </svg>

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/30 to-transparent"
          animate={{
            y: ["0%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Rest of the component remains unchanged */}
      <div className="container mx-auto py-10 relative z-10">
        <div className="flex gap-8 py-15 lg:py-30 items-center justify-center flex-col">
          <div>
            <a href="https://discord.com/invite/NhbaEHR9w6" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="gap-4 cursor-pointer">
                Join my Discord <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Jagadish Tripathy</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Proactive detection, analysis, and response to cyber threats using advanced SIEM and EDR solutions.
            </p>
          </div>
          <div className="flex flex-row gap-3">

            <ShimmerButton
              onClick={() => window.open("https://drive.google.com/file/d/14DVYaIz8b1Hlc1dtZCKS596136a1BnAF/view?usp=drivesdk", "_blank")}
              className="shadow-2xl"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Resume
              </span>
              <ArrowUpRight className="w-4 h-4 ml-2 text-white" />
            </ShimmerButton>


            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Jagadishtripathyforyou@gmail.com&su=Hello%20Jagadish&body=I%20wanted%20to%20connect%20with%20you%20regarding%20your%20work%20in%20VAPT.%20Your%20experience%20as%20a%20security%20engineer%20really%20interests%20me.
"
              target="_blank"
              rel="noopener noreferrer" >
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Hire me
                </span>
                <MoveRight className="w-4 h-4 ml-2 text-white" />
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };