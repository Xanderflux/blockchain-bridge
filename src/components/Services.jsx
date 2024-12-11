import { ArrowRight } from 'lucide-react'
import { Button } from "./ui/button"

export default function Services() {
  const services = [
    {
      image: "/Ellipse 7.png",
      title: "Community Development, Management & Engagement",
      description: "We build, manage & keep your community active 24/7, ensuring constant engagement, no matter how quiet the chat gets.",
      highlight: false
    },
    {
      image: "/Ellipse 8.png",
      title: "Blockchain & Full Stack Development",
      description: "We build secure blockchain solutions and seamless DApps, covering both backend and frontend needs.",
      highlight: true
    },
    {
      image: "/Ellipse 9.png",
      title: "Graphics, Art and UI/UX Design",
      description: "We design engaging UI/UX for projects, incorporating graphics and art to enhance user experiences and ensure smooth interactions in decentralized applications.",
      highlight: false
    },
    {
      image: "/Ellipse 10.png",
      title: "Content Strategy and Writing",
      description: "We create engaging content for the space, including articles and marketing materials that effectively communicate your project's vision and value.",
      highlight: false
    },
    {
      image: "/Ellipse 11.png",
      title: "Project Management & Consultation",
      description: "We provide expert project management and consultation services, guiding you through every phase of your project initiative to ensure successful execution.",
      highlight: false
    },
    {
      image: "/Ellipse 12.png",
      title: "Blockchain Economics and Data Analysis",
      description: "We offer specialized blockchain economics and data analysis services, helping you design effective token models and extract valuable insights from blockchain data to drive informed decision-making.",
      highlight: false
    }
  ]

  return (
    <section className="bg-[#0B0F17] py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">What We Serve</h2>
            <p className="text-2xl">
              For <span className="text-yellow-400">Your Project</span>
            </p>
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8">
            Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 ${
                service.highlight 
                  ? 'bg-yellow-400' 
                  : 'bg-white'
              }`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-16 h-16 mb-6 rounded-full" 
              />
              <h3 className={`text-xl font-semibold mb-4 ${
                service.highlight ? 'text-black' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
              <p className={`mb-6 ${
                service.highlight ? 'text-black/80' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
              <button 
                className={`flex items-center gap-2 font-medium ${
                  service.highlight ? 'text-black' : 'text-gray-900'
                }`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

