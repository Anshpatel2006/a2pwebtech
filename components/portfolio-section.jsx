"use client"

import { useState } from "react"
import { ExternalLink, Building2, ShoppingCart, User, LayoutDashboard, Rocket, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "Business", "E-commerce", "Portfolio", "Dashboard", "Landing Page", "Security"]

const projects = [
  {
    title: "TechCorp Business Website",
    category: "Business",
    description:
      "A comprehensive business website for a technology consulting firm with service showcases, team profiles, and client testimonials.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    challenges: "Creating a cohesive brand experience while showcasing complex B2B services in an accessible way.",
    results: "150% increase in lead generation, 40% reduction in bounce rate, improved SEO rankings.",
    link: "#",
    icon: Building2,
  },
  {
    title: "StyleHub E-commerce Store",
    category: "E-commerce",
    description:
      "A full-featured fashion e-commerce platform with inventory management, secure payments, and customer accounts.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    challenges: "Implementing real-time inventory sync across multiple warehouses with secure payment processing.",
    results: "200+ products launched, 99.9% uptime, 3-second average page load time.",
    link: "#",
    icon: ShoppingCart,
  },
  {
    title: "Creative Portfolio",
    category: "Portfolio",
    description:
      "An artistic portfolio website for a digital artist featuring interactive galleries and smooth animations.",
    techStack: ["React", "Framer Motion", "Three.js", "Tailwind CSS"],
    challenges: "Balancing heavy visual content with performance while maintaining smooth animations.",
    results: "Featured in design galleries, 5x increase in client inquiries.",
    link: "#",
    icon: User,
  },
  {
    title: "Analytics Dashboard",
    category: "Dashboard",
    description: "A comprehensive admin dashboard for a SaaS company with real-time analytics and user management.",
    techStack: ["React", "TypeScript", "Chart.js", "PostgreSQL", "Redis"],
    challenges: "Handling real-time data streams and complex visualizations without performance degradation.",
    results: "Processing 1M+ data points daily, sub-100ms response times.",
    link: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Product Launch Landing Page",
    category: "Landing Page",
    description:
      "A high-converting landing page for a tech startup's product launch with email capture and countdown timer.",
    techStack: ["Next.js", "Tailwind CSS", "Mailchimp API", "Vercel"],
    challenges: "Maximizing conversion rate while maintaining fast load times and mobile responsiveness.",
    results: "35% conversion rate, 10,000+ signups in first week.",
    link: "#",
    icon: Rocket,
  },
  {
    title: "SecureBank Portal",
    category: "Security",
    description:
      "A security-hardened web portal for a financial services company with multi-factor authentication and encryption.",
    techStack: ["React", "Node.js", "PostgreSQL", "JWT", "2FA"],
    challenges: "Implementing bank-grade security while maintaining user-friendly experience.",
    results: "Zero security incidents, SOC 2 compliance achieved, 99.99% uptime.",
    link: "#",
    icon: Shield,
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our completed projects showcasing our expertise across various industries and technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 group overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <project.icon className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{project.category}</Badge>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Challenge:</p>
                    <p className="text-xs text-muted-foreground">{project.challenges}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Results:</p>
                    <p className="text-xs text-primary">{project.results}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
