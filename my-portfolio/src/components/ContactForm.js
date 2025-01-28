export default function ContactForm() {
    return (
      <form className="max-w-lg mx-auto contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 bg-dark border border-silver rounded-lg text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 bg-dark border border-silver rounded-lg text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 bg-dark border border-silver rounded-lg text-white"
          rows="4"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-cobalt-blue text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    );
  }