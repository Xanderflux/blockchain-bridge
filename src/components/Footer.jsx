import { FaXTwitter, FaDiscord, FaTelegram, FaLinkedin } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Footer() {
  const menu = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQs', id: 'faq' },
  ];

  const socials = [
    { name: 'X', href: '#', icon: FaXTwitter },
    { name: 'Telegram', href: 'https://t.me/blockchainbridgeway', icon: FaTelegram },
    { name: 'Discord', href: 'https://discord.gg/Dnz9ddzm', icon: FaDiscord },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/blockchainbridgeway', icon: FaLinkedin },
  ];

  const year = new Date().getFullYear();

  return (
    <motion.footer
      id="contact"
      className="bg-gray-900 text-white py-12 border-t border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <motion.div className="lg:col-span-2" variants={fadeInUp} custom={1}>
            <div className="flex items-center gap-2 mb-4 font-bold">
              <img src="/blockchain bridge logo.png" alt="BlockchainBridgeWay" className="w-8 h-8" />
              BlockchainBridgeWay
            </div>
            <p className="text-gray-400 mb-4">Join our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-grow"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-600 text-black rounded-l-none">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              By subscribing you agree to our privacy policy and provide consent to receive updates from our company.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} custom={2}>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menu.map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} custom={3}>
            <h3 className="font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} custom={4}>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">web3smartskiper@gmail.com</p>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400"
          variants={fadeInUp}
          custom={5}
        >
          <p>&copy; {year} BlockchainBridgeWay</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://blockchain-bridge-1.gitbook.io/blockchain-bridge/privacy-policy"
              className="hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://blockchain-bridge-1.gitbook.io/blockchain-bridge/terms-and-services"
              className="hover:text-white"
            >
              Terms of Service
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://blockchain-bridge-1.gitbook.io/blockchain-bridge/cookie-settings"
              className="hover:text-white"
            >
              Cookies Settings
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
