import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4">
      <div className="flex items-center gap-2 md:gap-4">
        <img src="/blockchain bridge logo.png" alt="BlockchainBridgeWay Logo" className="w-8 h-8 md:w-10 md:h-10" />
        <span className="text-white text-sm md:text-xl lg:text-2xl font-medium">BlockchainBridgeWay</span>
      </div>

        
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-gray-300 hover:text-white transition-colors" href="#"> 
            Home
          </a>
          <a className="text-gray-300 hover:text-white transition-colors" href="#about">
            About
          </a>
          <a className="text-gray-300 hover:text-white transition-colors" href="#services">
            Services
          </a>
          <a className="text-gray-300 hover:text-white transition-colors" href="#contact">
            Contact
          </a>  
        </nav>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-2 py-1 rounded md:px-4 md:py-2"
          onClick={() =>
                window.open(
                  "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui",
                  "_blank"
                )
              }>
          Documentation
        </Button>
      </div>
    </header>
  )
}

