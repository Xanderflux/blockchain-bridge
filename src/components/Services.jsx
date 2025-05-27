import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "./ui/button";

export default function Services() {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const services = [
    {
      image: "/Ellipse 7.png",
      title: "Community Development, Management & Engagement",
      description: "We don’t just build communities—we keep them thriving. From engagement strategies to 24/7 management, we ensure your community stays active, vibrant, and aligned with your vision.",
      link: "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui/our-services-comprehensive-solutions-for-web3-projects/community-development-management-and-engagement",
    },
    {
      image: "/Ellipse 8.png",
      title: "Blockchain & Full Stack Development",
      description: "Need secure, scalable blockchain solutions? We handle everything from backend infrastructure to frontend DApps, ensuring a seamless experience for users.",
      link: "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui/our-services-comprehensive-solutions-for-web3-projects/blockchain-and-full-stack-development",
    },
    {
      image: "/Ellipse 9.png",
      title: "Graphics, Art and UI/UX Design",
      description: "First impressions matter. We craft visually stunning UI/UX designs, graphics, and branding elements that make your project stand out and keep users engaged.",
      link: "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui/our-services-comprehensive-solutions-for-web3-projects/design-and-branding",
    },
    {
      image: "/Ellipse 10.png",
      title: "Content Strategy and Writing",
      description: "Your story deserves to be heard. We create compelling articles, whitepapers, and marketing content that effectively communicate your project’s vision and value.",
      link: "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui/our-services-comprehensive-solutions-for-web3-projects/content-strategy-and-writing",
    },
    {
      image: "/Ellipse 11.png",
      title: "Project Management & Consultation",
      description: "From ideation to execution, we guide you through every phase of your project with expert consultation and hands-on project management.",
      link: "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui/our-services-comprehensive-solutions-for-web3-projects/project-management-and-consultation",
    },
    {
      image: "/Ellipse 12.png",
      title: "Blockchain Economics and Data Analysis",
      description: "Make data-driven decisions with confidence. We analyze blockchain data, design sustainable token models, and provide insights to help you refine your strategy.",
      link: "https://blockchain-bridge-1.gitbook.io/blockchain-bridge/~/changes/wBbV2WZarhQtfTQCkRui/our-services-comprehensive-solutions-for-web3-projects/tokenomics-and-data-analysis",
    },
  ];

  return (
    <section className="bg-[#0B0F17] py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">What We Do: Powering Your Web3
            Success </h2>
            <p className="text-2xl mt-3">
              <span className="text-yellow-400">
                No matter where you are in your Web3 journey, we’ve got the expertise to take your
                project to the next level. From community building to development, design, and strategy,
                we cover it all.
              </span>
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
                highlightedIndex === index 
                  ? 'bg-yellow-400' 
                  : 'bg-white'
              }`}
              onMouseOver={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(null)}
              onClick={() => setHighlightedIndex(index)}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-16 h-16 mb-6 rounded-full" 
              />
              <h3 className={`text-xl font-semibold mb-4 ${
                highlightedIndex === index ? 'text-black' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
              <p className={`mb-6 ${
                highlightedIndex === index ? 'text-black/80' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
              <button 
                className={`flex items-center gap-2 font-medium ${
                  highlightedIndex === index ? 'text-gray-600' : 'text-black'
                }`}
                onClick={() => window.open(service.link, '_blank')}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
