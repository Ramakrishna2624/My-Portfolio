import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Creative and detail-oriented Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and
              modern frameworks like React and Node.js. Passionate about UI/UX, pixel-perfect design, and continuous
              innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Collaborative team player with a problem-solving mindset, committed to delivering user-centric digital
              solutions that drive engagement and business growth.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Bachelor's in Computer Science and Engineering</h4>
                  <p className="text-sm text-muted-foreground">Malla Reddy Engineering College, Hyderabad</p>
                  <p className="text-sm text-muted-foreground">Nov 2022 - Mar 2026 • CGPA: 7.94/10</p>
                </div>
                <div>
                  <h4 className="font-medium">Intermediate in MPC</h4>
                  <p className="text-sm text-muted-foreground">Master Minds Junior College, Siddipet</p>
                  <p className="text-sm text-muted-foreground">Jul 2020 - Apr 2022 • Marks: 803/1000</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Photography Club (SAC) - President</p>
                    <p className="text-sm text-muted-foreground">Leadership role in student activities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Coordinator - ICAMSD</p>
                    <p className="text-sm text-muted-foreground">International Conference 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
