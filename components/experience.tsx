import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <Card className="relative ml-16">
            <div className="absolute -left-12 top-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>

            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Junior Developer Intern</h3>
                  <p className="text-primary font-medium">Skilltimate Technologies</p>
                  <p className="text-sm text-muted-foreground">Hyderabad, India</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  Mar 2023 - May 2023
                </Badge>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Collaborated with Senior Developers to develop and maintain multiple software applications using HTML,
                CSS, and JavaScript. Gained hands-on experience in web development best practices and team
                collaboration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
