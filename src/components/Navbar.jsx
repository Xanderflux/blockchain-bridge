import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSetActive = (id) => {
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      const nearBottom = scrollPosition >= pageHeight - 50;

      if (nearBottom) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-sm"
    >
      <div className="container flex items-center justify-between h-16 px-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 md:gap-4"
        >
          <img
            src="/blockchain bridge logo.png"
            alt="BlockchainBridgeWay Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="text-white text-sm md:text-xl lg:text-2xl font-medium">
            BlockchainBridgeWay
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={item.id === 'contact' ? -10 : -70}
                duration={500}
                onClick={() => {
                  if (item.id === 'contact') {
                    handleSetActive('contact');
                  }
                }}
                onSetActive={() => handleSetActive(item.id)}
                className={`transition-colors cursor-pointer py-1 px-2 rounded-md text-sm md:text-base ${
                  activeSection === item.id
                    ? 'text-yellow-400 font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </ScrollLink>
            </motion.div>
          ))}
        </nav>

        <motion.a
          target="_blank"
          href="https://blockchain-bridge-1.gitbook.io/blockchain-bridge"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-2 py-1 rounded md:px-4 md:py-2">
            Documentation
          </Button>
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-300 ml-4">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-zinc-900 border-t border-zinc-700 px-4 pb-4"
        >
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={item.id === 'contact' ? -10 : -70}
              duration={500}
              onClick={() => {
                setIsMenuOpen(false);
                if (item.id === 'contact') {
                  handleSetActive('contact');
                }
              }}
              onSetActive={() => handleSetActive(item.id)}
              className={`block py-2 border-b border-zinc-700 cursor-pointer transition-colors ${
                activeSection === item.id
                  ? 'text-yellow-400 font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
