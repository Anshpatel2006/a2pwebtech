"use client"

import { ArrowRight, MessageCircle, Shield, Code, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Web Development Startup</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            A2P<span className="text-primary">WebTech</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-4">
            Empowering Your Business with Powerful Websites
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            We are a passionate team of 3 experts combining Cybersecurity, Full Stack Development, and Frontend Design
            to deliver secure, scalable, and stunning web solutions for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <a href="#contact">
                Get a Website
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 rounded-xl border border-border">
              <Shield className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Security First</p>
                <p className="text-sm text-muted-foreground">Protected Solutions</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 rounded-xl border border-border">
              <Code className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Full Stack</p>
                <p className="text-sm text-muted-foreground">End-to-End Development</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 rounded-xl border border-border">
              <Palette className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Modern Design</p>
                <p className="text-sm text-muted-foreground">Beautiful Interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
