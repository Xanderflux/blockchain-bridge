import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">What they say about us</h2>
        
        <div className="bg-gray-800 rounded-xl p-8 relative">
          <img 
            src="/testimonial.png?height=400&width=600" 
            alt="Testimonial" 
            className="rounded-xl object-cover w-full h-[400px] mb-8"
          />
          
          <p className="text-gray-300 mb-6">
            "Lorem ipsum dolor sit amet consectetur. Tempus morbi egest as libero pretium pulvinar pretium placerat nec quis. Feugi at vel iaculis et magna vivamus nibh nunc pellentesque inte rdum. Id elit vitae arcu pharetra eget. Integer vitae molestie elementum adipiscing leo ante sed cum elementum. Nunc purus ornare aliquam risus adipiscing in ut non. Congue risu s posuere pellentesque morbi viverra neque orci aliquet."
          </p>
          
          <div className="flex items-center gap-4">
            <img 
              src="/adedokun.png?height=48&width=48" 
              alt="Avatar" 
              className="rounded-full w-12 h-12"
            />
            <div>
              <h4 className="text-white font-semibold">Adeodokun Babaatundelala</h4>
              <p className="text-gray-400">Mechatronics student 2020/1</p>
            </div>
          </div>
          
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button className="bg-gray-700 p-2 rounded-full">
              <ChevronLeft className="text-white" />
            </button>
            <button className="bg-gray-700 p-2 rounded-full">
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

