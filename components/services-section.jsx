import { Building2, ShoppingCart, Rocket, LayoutDashboard, User, Wrench, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Business Websites",
    description: "Professional websites that establish your brand presence and convert visitors into customers.",
    features: [
      "Custom design tailored to your brand identity",
      "SEO-optimized structure for better rankings",
      "Mobile-responsive across all devices",
      "Fast loading speeds and performance optimization",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description: "Powerful online stores with secure payment integration and inventory management.",
    features: [
      "Secure payment gateway integration",
      "Product catalog and inventory management",
      "Order tracking and customer accounts",
      "Shopping cart and checkout optimization",
    ],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive conversions.",
    features: [
      "Conversion-focused design and copy",
      "A/B testing ready structure",
      "Lead capture forms and CTA optimization",
      "Analytics integration for tracking",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description: "Intuitive admin panels and dashboards for managing your business operations.",
    features: [
      "Real-time data visualization",
      "Role-based access control",
      "Custom reporting and analytics",
      "API integrations with your tools",
    ],
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description: "Stunning portfolio sites that showcase your work and attract new opportunities.",
    features: [
      "Gallery and project showcases",
      "Smooth animations and transitions",
      "Contact forms and social integration",
      "Blog section for content marketing",
    ],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website secure and up-to-date.",
    features: [
      "Regular security updates and patches",
      "Performance monitoring and optimization",
      "Content updates and backups",
      "24/7 technical support",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From simple landing pages to complex e-commerce platforms, we offer comprehensive web development services
            tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 group"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
