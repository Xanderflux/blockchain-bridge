import { FaXTwitter, FaDiscord, FaTelegram, FaLinkedin } from 'react-icons/fa6'
import { Button } from "@/components/ui/button"

export default function Footer() {
  const menu = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' }
  ];

  const socials = [
    { name: 'X', href: '#', icon: FaXTwitter },
    { name: 'Telegram', href: '#', icon: FaTelegram },
    { name: 'Discord', href: '#', icon: FaDiscord },
    { name: 'LinkedIn', href: '#', icon: FaLinkedin }
  ];


  return (
    <footer id='contact' className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
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
              <Button className="bg-yellow-400 hover:bg-yellow-600 6ext-black rounded-l-none">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              By subscribing you agree to our privacy policy and provide consent to receive updates from our company.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menu.map((item) => (
                <li key={item.name}><a href={item.href} className="text-gray-400 hover:text-white">{item.name}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a key={social.name} href={social.href} className="text-gray-400 hover:text-white" aria-label={social.name}>
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">web3smartskiper@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 Smart skiper</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

