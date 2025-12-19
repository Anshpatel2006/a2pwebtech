import { Shield, Server, Palette, Target, Eye, Heart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Ansh Patel",
    role: "Cyber Security Engineer",
    description:
      "Expert in securing web applications, implementing robust authentication systems, and protecting against cyber threats. Ensures every project meets the highest security standards.",
    icon: Shield,
    color: "text-red-400",
  },
  {
    name: "Ayush Prajapati",
    role: "Full Stack Developer + DevOps Engineer",
    description:
      "Master of both frontend and backend technologies with expertise in cloud infrastructure, CI/CD pipelines, and scalable architecture. Delivers robust, production-ready solutions.",
    icon: Server,
    color: "text-blue-400",
  },
]

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower businesses with secure, scalable, and visually stunning web solutions that drive growth and success.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To become the most trusted web development partner for businesses seeking quality, security, and innovation.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, excellence, innovation, and client satisfaction are at the core of everything we do.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">A2PWebTech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A2PWebTech is a dynamic web development startup founded by three passionate professionals who believe in
            delivering excellence. We combine expertise in cybersecurity, full-stack development, and frontend design to
            create websites that are not just beautiful, but also secure and performant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            Meet Our <span className="text-primary">Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6`}>
                    <member.icon className={`w-8 h-8 ${member.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">What Makes Us Unique?</h4>
                <p className="text-muted-foreground">
                  Our unique blend of Cybersecurity expertise, Full Stack capabilities, and Frontend excellence means
                  you get a website that is secure from day one, scales effortlessly, and looks absolutely stunning.
                  Unlike traditional agencies, we handle everything in-house with a security-first mindset.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
