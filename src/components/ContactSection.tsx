import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";

const ContactSection = () => {
    return (
        <Section>
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-accent">Get In Touch</h2>
                <p className="mt-6 mb-12 text-gray-300 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam, voluptate facere, enim ex laborum cumque nisi, iste velit animi recusandae dolorum corrupti neque quos qui deleniti laboriosam autem dolorem.
                </p>
                <div className="flex justify-center items-center gap-8">
                     <motion.a whileHover={{ scale: 1.1, color: '#00FFFF' }} transition={{ type: 'spring', stiffness: 300 }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                        <Github size={40} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1, color: '#00FFFF' }} transition={{ type: 'spring', stiffness: 300 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                        <Linkedin size={40} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1, color: '#00FFFF' }} transition={{ type: 'spring', stiffness: 300 }} href="mailto:youremail@example.com" className="text-gray-400">
                        <Mail size={40} />
                    </motion.a>
                </div>
                <div className="mt-16 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Khosbayar. All Rights Reserved.</p>
                </div>
            </div>
        </Section>
    );
};
export default ContactSection;