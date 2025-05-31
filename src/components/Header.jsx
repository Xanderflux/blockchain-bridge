import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/placeholder.svg?height=32&width=32" alt="BlockchainBridgeWay" className="h-8" />
          <span className="text-white font-bold">BlockchainBridgeWay</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-yellow-400">Home</a>
          <a href="#about" className="text-white hover:text-yellow-400">About</a>
          <a href="#services" className="text-white hover:text-yellow-400">Services</a>
          <a href="#contact" className="text-white hover:text-yellow-400">Contact</a>
        </nav>

          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
            onClick={() =>
              window.open(
                "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui",
                "_blank"
              )
            }
          >
            Documentation
          </Button>
      </div>
    </header>
  )
}

