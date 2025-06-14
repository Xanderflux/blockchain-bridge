

const Testimonial = [
  {
    image: "/Projects/Decoder.jpeg",
    name: "Decoder",
    text: "They understood our project like co-founders.",
  },
  {
    image: "/Projects/LutBox.jpeg",
    name: "LutBox",
    text: "Our brand finally has a visual identity.",
  },
  {
    image: "/Projects/Chad_coin.jpeg",
    name: "Chad coin",
    text: "Our community became active overnight!",
  },
  {
    image: "/Projects/Injective_Birds.jpeg",
    name: "Injective Birds",
    text: "Their management team is always active, even weekends.",
  },
  {
    image: "/Projects/Sugar_Land.jpeg",
    name: "Sugar Land",
    text: "We saw real growth in engagement and followers.",
  },
  {
    image: "/Projects/EaveAI.jpeg",
    name: "EaveAI",
    text: "Our launch blew up, thanks to their raiders!",
  },
  {
    image: "/Projects/KAPPY_Ai.jpeg",
    name: "KAPPY Ai",
    text: "They don't just post content, they write narratives.",
  },
  {
    image: "/Projects/Shazam_Finance.jpeg",
    name: "Shazam Finance",
    text: "Working with them feels like having an internal team.",
  },
  {
    image: "/Projects/Doge_caucus.jpeg",
    name: "Doge caucus",
    text: "Designs? Clean, Web3-native, and on-brand.",
  },
];

export default function Testimonials() {

  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 tracking-wide">
          What They Say About Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Testimonial.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
                  <div className="mb-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-white text-lg leading-relaxed mb-4">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="text-yellow-400 font-semibold text-right">
                    {testimonial.name}
                  </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
