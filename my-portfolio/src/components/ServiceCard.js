import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, link, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-dark-grey p-6 rounded-lg shadow-lg w-80 text-center ${className}`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={link}>
        <button className="px-4 py-2 bg-cobalt-blue text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </Link>
    </motion.div>
  );
}