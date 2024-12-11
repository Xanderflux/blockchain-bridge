export default function WhyUs() {
    const features = [
      {
        image: "/Ellipse 3.png",
        title: "24/7 Activities",
        description:
          "BlockchainBridge operates round the clock, ensuring seamless support for your projects. From blockchain management to community management, we're here 24/7, keeping your operations running smoothly in the decentralized world.",
      },
      {
        image: "/Ellipse 4.png",
        title: "Client Satisfaction",
        description:
          "At BlockchainBridge, our top priority is delivering exceptional results. We work closely with our clients, tailoring solutions to their specific needs. Your success is our success, and we're committed to ensuring your satisfaction every step of the way.",
      },
      {
        image: "/Ellipse 5.png",
        title: "Security and Privacy First...",
        description:
          "BlockchainBridge prioritizes security for both your assets and the community. With strong encryption, secure smart contracts, and thorough audits, we ensure the safety of your data and the protection of your ecosystem.",
      },
      {
        image: "/Ellipse 6.png",
        title: "Collaborative Features",
        description:
          "At BlockchainBridge, we foster partnerships with top-tier communities and investors. Our collaborative features facilitate meaningful connections, enabling joint ventures and shared success in the space. Together, we create a thriving ecosystem that drives innovation and growth.",
      },
    ];
  
    return (
      <section className="bg-[#0B0F17] py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-yellow-400 text-4xl font-bold mb-16">Why Us?</h2>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - First two features */}
            <div className="space-y-8">
              {features.slice(0, 2).map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-[#131B2E]/50 rounded-2xl p-8 backdrop-blur-sm"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-12 h-12 mb-6"
                  />
                  <h3 className="text-white text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
  
            {/* Center - VR Image */}
            <div className="relative order-first lg:order-none mb-8 lg:mb-0">
              <img
                src="/Virtual Reality Experience.png"
                alt="VR Experience"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
  
            {/* Bottom - Last two features */}
            <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.slice(2).map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-[#131B2E]/50 rounded-2xl p-8 backdrop-blur-sm"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-12 h-12 mb-6"
                  />
                  <h3 className="text-white text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  