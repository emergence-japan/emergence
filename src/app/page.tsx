'use client'

import { motion } from "framer-motion";
import HeroScene from "@/components/HeroScene";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroScene />
      
      <motion.div 
        className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh] text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
          variants={itemVariants}
        >
          Innovating the <span className="text-accent drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Future</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
          variants={itemVariants}
        >
          Emergence-japan合同会社は、次世代のテクノロジーで、ビジネスに革新的な価値を提供します。
        </motion.p>
        
        <motion.div 
          className="flex gap-4"
          variants={itemVariants}
        >
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white/20 rounded-full font-bold hover:bg-white/5 hover:scale-105 transition-all">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
