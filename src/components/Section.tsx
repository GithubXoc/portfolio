import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <motion.section
      className="h-screen w-screen flex-shrink-0 flex justify-center items-center p-8 md:p-16 snap-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl h-full flex flex-col justify-center">
        {children}
      </div>
    </motion.section>
  );
};
export default Section;