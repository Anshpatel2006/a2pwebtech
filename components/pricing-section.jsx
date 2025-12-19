import { Check, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: "Landing Page",
    price: "₹2,999",
    suffix: "+",
    description: "Perfect for campaigns and product launches",
    features: [
      "Single page design",
      "Mobile responsive",
      "Contact form integration",
      "SEO optimization",
      "Social media links",
      "1 revision round",
    ],
    popular: false,
  },
  {
    name: "Business Website",
    price: "₹4,999",
    suffix: "+",
    description: "Ideal for small to medium businesses",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Mobile responsive",
      "SEO optimization",
      "Contact forms",
      "Google Analytics",
      "2 revision rounds",
    ],
    popular: true,
  },
  {
    name: "E-commerce Website",
    price: "₹9,999",
    suffix: "+",
    description: "Complete online store solution",
    features: [
      "Up to 50 products",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking",
      "Customer accounts",
      "Admin dashboard",
      "3 revision rounds",
    ],
    popular: false,
  },
  {
    name: "Custom Dashboard",
    price: "₹14,999",
    suffix: "+",
    description: "Advanced admin panels and dashboards",
    features: [
      "Custom functionality",
      "Real-time analytics",
      "User management",
      "API integrations",
      "Role-based access",
      "Data visualization",
      "Unlimited revisions",
    ],
    popular: false,
  },
]

const maintenancePlans = [
  {
    name: "Basic Maintenance",
    price: "₹999",
    period: "/month",
    features: ["Security updates", "Weekly backups", "Email support", "Minor content updates"],
  },
  {
    name: "Premium Maintenance",
    price: "₹1,499",
    period: "/month",
    features: [
      "All Basic features",
      "24/7 priority support",
      "Performance monitoring",
      "Monthly reports",
      "Feature updates",
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Affordable pricing plans designed to fit your budget. No hidden costs, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:border-primary/50 transition-all relative ${
                plan.popular ? "border-primary ring-2 ring-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.suffix}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Maintenance <span className="text-primary">Plans</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenancePlans.map((plan, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
