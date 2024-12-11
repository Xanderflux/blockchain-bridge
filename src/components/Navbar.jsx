import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4">
      <div className="flex items-center gap-2">
  <img src="/blockchain bridge logo.png" alt="BlockchainBridgeway Logo" className="w-10 h-10" />
  <span className="text-white text-xl font-medium">BlockchainBridgeway</span>
</div>

        
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-gray-300 hover:text-white transition-colors" href="/">
            Home
          </a>
          <a className="text-gray-300 hover:text-white transition-colors" href="/about">
            About
          </a>
          <a className="text-gray-300 hover:text-white transition-colors" href="/services">
            Services
          </a>
          <a className="text-gray-300 hover:text-white transition-colors" href="/contact">
            Contact
          </a>
        </nav>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
          Documentation
        </Button>
      </div>
    </header>
  )
}

