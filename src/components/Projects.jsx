import { Button } from "@/components/ui/button"

const projects = [
  { title: "UI/UX Design Concept", image: "/Dirección y Gestión Empresarial.png?height=700&width=400" },
  { title: "Blockchain Development", image: "/Safeguarding Spaces_ AI in Content Moderation.png?height=700&width=400" },
  { title: "Data Analytics Dashboard", image: "/images.jpeg?height=700&width=400" },
  { title: "Mobile App Development", image: "/Yellow and blue cyber city.png?height=700&width=400" },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">Projects We have Completed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-semibold text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

