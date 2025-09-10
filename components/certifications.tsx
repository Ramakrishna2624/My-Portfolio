import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      provider: "NXTWAVE - CCBP 4.0 Academy",
      certificates: [
        "Build Your Own Static Website - HTML, CSS, Bootstrap",
        "Build Your Own Responsive Website - Bootstrap, Flexbox",
        "Build Your Own Dynamic Web Application - JavaScript",
        "Programming Foundations - Python",
        "Databases - SQL",
        "JavaScript Essentials - JavaScript",
      ],
    },
    {
      provider: "Microsoft",
      certificates: ["Azure AI Fundamentals"],
    },
    {
      provider: "Accenture",
      certificates: ["Data Analytics and Visualization Job Simulation"],
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((provider, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5 text-primary" />
                  {provider.provider}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {provider.certificates.map((cert, certIndex) => (
                  <Badge
                    key={certIndex}
                    variant="outline"
                    className="w-full justify-start text-xs p-2 h-auto whitespace-normal"
                  >
                    {cert}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
