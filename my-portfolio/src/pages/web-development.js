import { motion } from 'framer-motion';

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dark text-white p-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bubble p-8"
      >
        <h1 className="text-4xl font-bold mb-8">Website Development</h1>
        <p className="text-lg mb-8">
          Let’s build something amazing together. Fill out the form below to get started.
        </p>
        {/* Add a form or interactive component here */}
      </motion.div>
    </div>
  );
}