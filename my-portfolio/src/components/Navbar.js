import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        Menu
      </div>
      <div className="navbar-links">
        <Link href="/" className="text-silver hover:text-white transition duration-300">
          Home
        </Link>
        <Link href="/software-development" className="text-silver hover:text-white transition duration-300">
          Software
        </Link>
        <Link href="/web-development" className="text-silver hover:text-white transition duration-300">
          Websites
        </Link>
      </div>
    </nav>
  );
}