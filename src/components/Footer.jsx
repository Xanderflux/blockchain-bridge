import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/placeholder.svg?height=32&width=32" alt="BlockchainBridgeway" className="h-8" />
              <span className="font-bold">BlockchainBridgeway</span>
            </div>
            <p className="text-gray-400 mb-4">Join our newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-grow"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-l-none">
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
              {['About', 'Why us', 'Services', 'Testimonials', 'FAQs'].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <p className="text-gray-400">babulande 24 opposite ballon way</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">web3smartskiper@gmail.com</p>
            <p className="text-gray-400">+2347868926829</p>
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

