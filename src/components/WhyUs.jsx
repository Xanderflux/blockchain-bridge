import { motion } from 'framer-motion';

export default function WhyUs() {
  const features = [
    {
      image: "/Always On, Always Ready.jpg",
      title: "Always On, Always Ready",
      description:
        "Web3 never sleeps—and neither do we. BlockchainBridgeWay operates 24/7, ensuring your project runs smoothly at all times. Whether it’s blockchain management, community engagement, or technical support, we’re always here to keep things on track in the fast-moving decentralized world.",
    },
    {
      image: "/Security & Privacy.jpg",
      title: "Security & Privacy",
      description:
        "In Web3, trust is everything—and we take security seriously. At BlockchainBridgeWay, we protect your assets, data, and community with strong encryption, secure smart contracts, and rigorous audits. Your ecosystem’s safety isn’t just a priority—it’s the foundation of everything we do.",
    },
    {
      image: "/Your Success, Our Mission.jpg",
      title: "Your Success, Our Mission",
      description:
        "At BlockchainBridgeWay, client success isn’t just a goal—it’s the standard. We tailor our solutions to fit your unique needs, working closely with you every step of the way. When you thrive, we thrive—and we’re committed to delivering results that exceed expectations.",
    },
    {
      image: "/Collaboration That Fuels Growth.jpg",
      title: "Collaboration That Fuels Growth",
      description:
        "Success in Web3 isn’t a solo journey. That’s why we connect you with top-tier communities, investors, and builders to spark meaningful collaborations. Our platform makes it easy to form powerful partnerships, drive innovation, and scale faster—because when we build together, we thrive together.",
    },
  ];

  return (
    <section id="about" className="bg-[#0B0F17] py-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
          className="text-yellow-400 text-4xl font-bold mb-16"
        >
          Why Us?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - First two features */}
          <div className="space-y-8">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }} 
                viewport={{ once: true }}
                className="bg-[#131B2E]/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-12 h-12 mb-6 rounded-full"
                />
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center - VR Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="relative order-first lg:order-none mb-8 lg:mb-0"
          >
            <img
              src="/Virtual Reality Experience.png"
              alt="VR Experience"
              className="rounded-2xl w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom - Last two features */}
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.slice(2).map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }} 
                viewport={{ once: true }}
                className="bg-[#131B2E]/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-12 h-12 mb-6 rounded-full"
                />
                <h3 className="text-white text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
