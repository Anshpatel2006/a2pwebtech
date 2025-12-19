import { Badge } from "@/components/ui/badge"

const techCategories = [
  {
    name: "Frontend",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    name: "Backend",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    technologies: ["Node.js", "Express.js", "Python", "PHP", "REST APIs", "GraphQL"],
  },
  {
    name: "Database",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"],
  },
  {
    name: "DevOps & Cloud",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    technologies: ["AWS", "Vercel", "Docker", "GitHub Actions", "CI/CD", "Nginx"],
  },
  {
    name: "CMS & Tools",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    technologies: ["WordPress", "Shopify", "Git", "VS Code", "Figma", "Postman"],
  },
  {
    name: "Security",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    technologies: ["SSL/TLS", "OWASP", "JWT", "OAuth 2.0", "2FA", "Encryption", "Penetration Testing"],
  },
]

export default function TechStackSection() {
  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tools & <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We leverage the latest technologies and industry best practices to build modern, scalable, and secure web
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, idx) => (
                  <Badge key={idx} className={category.color}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
