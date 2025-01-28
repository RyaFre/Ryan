import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="bg-gradient-dark min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="text-6xl font-bold mb-4 text-white">Your Name</h1>
        <p className="text-xl mb-8 text-white">Full-Stack Developer</p>
        <button className="px-6 py-3 bg-cobalt-blue text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </motion.div>

      {/* About Me Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">About Me</h2>
        <p className="text-lg text-center mb-8 text-white">
          I am a full-stack developer with a passion for creating stunning websites and efficient software solutions.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Services I Provide</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ServiceCard
            title="Software Development"
            description="Build scalable and efficient software solutions."
            link="/software-development"
          />
          <ServiceCard
            title="Website Development"
            description="Create stunning and responsive websites."
            link="/web-development"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact Me</h2>
        <ContactForm />
      </div>
    </div>
  );
}