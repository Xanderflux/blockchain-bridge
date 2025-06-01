import { Button } from "./ui/button"
import { Play } from 'lucide-react'
import Navbar from "./Navbar"

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-16 overflow-hidden bg-zinc-900">
        {/* Grid Background */}
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-10">
          {Array(400).fill(null).map((_, i) => (
            <div key={i} className="border-[0.5px] border-zinc-700"></div>
          ))}
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-800/50 rounded-full px-4 py-2 mb-8">
            <span className="text-yellow-400">⚡</span>
            <span className="text-white">Generative Project Intelligence In Web3</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Revolutionizing Web3 Development & Decision-Making
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Unlock the full potential of your project with the perfect blend of expertise and innovation.
            At Blockchain Bridge, we combine smart strategies with top-tier talent to turn your Web3
            vision into reality- faster, smarter, and more efficiently.
            Whether you&apos;re refining an idea or scaling a breakthrough, we help you make informed
            decisions that push your project to new heights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8"
             onClick={() =>
                window.open(
                  "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui",
                  "_blank"
                )
              }>
              Documentation
            </Button>
            <Button variant="outline" className="text-black text-lg px-8">
              <Play className="w-4 h-4 mr-2" /> Watch video
            </Button>
          </div>

          <div className="max-w-4xl mx-auto bg-yellow-100/10 rounded-2xl p-16">
            <div className="flex items-center justify-center">
              <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
                <Play className="w-4 h-4 mr-2" />
                Watch introduce video
                <span className="ml-2 text-sm text-gray-500 flex items-center justify-center">
                  5 mins
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

