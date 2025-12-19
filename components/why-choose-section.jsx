import { Shield, Zap, Smartphone, Cloud, Palette, HeadphonesIcon, DollarSign, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Shield,
    title: "Security-First Development",
    description:
      "Every line of code is written with security in mind. Our cybersecurity expert ensures your website is protected against modern threats.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We understand time is money. Our streamlined process ensures your project is delivered on time without compromising quality.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First UI",
    description:
      "All our websites are designed mobile-first, ensuring perfect functionality and aesthetics across all devices and screen sizes.",
  },
  {
    icon: Cloud,
    title: "DevOps-Optimized Deployment",
    description:
      "Automated CI/CD pipelines, cloud infrastructure, and scalable architecture ensure your website performs flawlessly at any scale.",
  },
  {
    icon: Palette,
    title: "Professional Frontend Design",
    description:
      "Pixel-perfect designs with modern aesthetics, smooth animations, and intuitive user experiences that captivate your audience.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support ensures your website stays online and any issues are resolved promptly.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Premium quality at affordable prices. We offer transparent pricing with no hidden costs or surprise charges.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous testing across browsers and devices ensures a bug-free, smooth experience for all your users.",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">A2PWebTech</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with creative design to deliver websites that not only look great but also
            perform exceptionally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
