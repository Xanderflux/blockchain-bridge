export default function WhyUs() {
    const features = [
      {
        image: "/Ellipse 3.png",
        title: "Always On, Always Ready",
        description:
          "Web3 never sleeps—and neither do we. Blockchain Bridge operates 24/7, ensuring your project runs smoothly at all times. Whether it’s blockchain management, community engagement, or technical support, we’re always here to keep things on track in the fast-moving decentralized world.",
      },
      {
        image: "/Ellipse 4.png",
        title: "Your Success, Our Mission",
        description:
          "At Blockchain Bridge, client success isn’t just a goal—it’s the standard. We tailor our solutions to fit your unique needs, working closely with you every step of the way. When you thrive, we thrive—and we’re committed to delivering results that exceed expectations.",
      },
      {
        image: "/Ellipse 5.png",
        title: "Security & Privacy: Non-Negotiable",
        description:
          "In Web3, trust is everything—and we take security seriously. At Blockchain Bridge, we protect your assets, data, and community with strong encryption, secure smart contracts, and rigorous audits. Your ecosystem’s safety isn’t just a priority—it’s the foundation of everything we do.",
      },
      {
        image: "/Ellipse 6.png",
        title: "Collaboration That Fuels Growth",
        description:
          "Success in Web3 isn’t a solo journey. That’s why we connect you with top-tier communities, investors, and builders to spark meaningful collaborations. Our platform makes it easy to form powerful partnerships, drive innovation, and scale faster—because when we build together, we thrive together.",
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
  
  