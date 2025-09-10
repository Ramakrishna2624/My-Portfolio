"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Hi, I'm <span className="text-primary">Ramakrishna</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance mb-8">
            Frontend Developer passionate about creating beautiful, user-centric digital experiences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:krishnagadipally006@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramakrishna-gadipally006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6 mx-auto" />
        </button>
      </div>
    </section>
  )
}
