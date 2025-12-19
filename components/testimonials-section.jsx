import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStart Solutions",
    role: "Founder & CEO",
    content:
      "A2PWebTech transformed our outdated website into a modern, high-performing platform. Their attention to security and detail is remarkable. Our leads have increased by 200% since the launch!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Fashion Hub",
    role: "Business Owner",
    content:
      "The e-commerce website they built for us is fantastic! Easy to manage, secure payments, and our customers love the shopping experience. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Digital Agency",
    role: "Creative Director",
    content:
      "Working with A2PWebTech was a breeze. They understood our vision perfectly and delivered a portfolio website that truly represents our brand. Fast delivery and excellent support!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {"Don't just take our word for it. Here's what our clients have to say about working with us."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 italic">{`"${testimonial.content}"`}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
