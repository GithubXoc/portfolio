import { motion } from "framer-motion";
import { ArrowDown, MoveRight } from "lucide-react";
import Section from "./Section";

const HomeSection = () => {
    return (
        <Section>
            <div className="text-center md:text-left">
                <motion.h1 
                    className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Khosbayar
                </motion.h1>
                <motion.p 
                    className="text-2xl md:text-4xl text-accent mt-4 animate-glow"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    You can call me Khos
                </motion.p>
                <motion.p 
                    className="text-2xl md:text-4xl text-accent mt-4 animate-glow"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Developer
                </motion.p>
                <motion.div 
                    className="mt-12 flex justify-center md:justify-start items-center gap-3 text-gray-400"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <ArrowDown size={20} className="animate-bounce" />
                    <span>Scroll to explore</span>
                    <MoveRight size={20} className="hidden md:block ml-4"/>
                    <span className="hidden md:block">Or use arrow keys</span>
                </motion.div>
            </div>
        </Section>
    );
};
export default HomeSection;