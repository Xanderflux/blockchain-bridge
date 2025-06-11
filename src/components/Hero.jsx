import { useState } from 'react';
import { Play } from 'lucide-react';
import Navbar from './Navbar';
import { Button } from './ui/button';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => setIsVideoPlaying(true);

  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-16 overflow-hidden bg-zinc-900 min-h-screen">
        {/* Grid Background */}
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-10">
          {Array(400).fill(null).map((_, i) => (
            <div key={i} className="border-[0.5px] border-zinc-700"></div>
          ))}
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-800/50 rounded-full px-4 py-2 mb-8">
            <span className="text-yellow-400">⚡</span>
            <span className="text-white text-sm sm:text-base">Generative Project Intelligence In Web3</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Revolutionizing Web3 Development & Decision-Making
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Unlock the full potential of your project with the perfect blend of expertise and innovation.
            At BlockchainBridgeWay, we combine smart strategies with top-tier talent to turn your Web3
            vision into reality faster, smarter, and more efficiently.
            Whether you&apos;re refining an idea or scaling a breakthrough, we help you make informed
            decisions that push your project to new heights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a target='_blank' className="text-gray-400 hover:text-white" href="https://blockchain-bridge-1.gitbook.io/blockchain-bridge">
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8"
            >
              Documentation
            </Button>
            </a>
            <a target='_blank' className="text-gray-400 hover:text-white" href="https://youtu.be/Go7eAESMooQ">
              <Button 
                variant="outline" 
                className="text-black text-lg px-8 group"
              >
                <Play className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:scale-125" />
                Watch video
              </Button>
            </a>
          </div>

          {/* Video Section */}
          <div className="flex items-center justify-center w-full h-full">
            {isVideoPlaying ? (
              <div className="relative aspect-video w-full sm:max-w-3xl min-h-[200px] sm:min-h-0">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/Go7eAESMooQ?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3 rounded-xl group"
                  onClick={toggleVideo}
                >
                  <Play className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-125 hover:bg-gray-600" />
                  Watch introduce video
                  <span className="ml-2 text-sm text-gray-500">
                    5 mins
                  </span>
                </Button>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}