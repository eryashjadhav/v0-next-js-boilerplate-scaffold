import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, BookOpen, Users } from "lucide-react"

export const metadata = {
  title: "About | DevBlog",
  description: "Learn more about DevBlog and our mission to share web development knowledge.",
}

export default function AboutPage() {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "Vercel",
  ]

  const values = [
    {
      icon: Code,
      title: "Quality Code",
      description: "We believe in writing clean, maintainable, and well-documented code that stands the test of time.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and we stay current with the latest trends and best practices.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We build for the developer community, sharing knowledge and helping others grow.",
    },
    {
      icon: Palette,
      title: "Great Design",
      description: "Beautiful, accessible, and user-friendly interfaces are at the heart of what we do.",
    },
  ]

  return (
    <div className="container py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About DevBlog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're passionate about web development and sharing knowledge with the developer community. Our mission is to
          create high-quality content that helps developers build better applications.
        </p>
      </div>

      {/* Mission */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Mission</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-center">
                At DevBlog, we believe that great software is built by developers who never stop learning. Our goal is
                to provide practical, actionable content that helps developers at all levels improve their skills and
                build amazing applications. From beginner tutorials to advanced architectural patterns, we cover the
                full spectrum of modern web development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What We Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Technologies We Cover</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Our Tech Stack</CardTitle>
              <CardDescription>We focus on modern web development technologies and frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content Types */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What You'll Find Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Tutorials</CardTitle>
              <CardDescription>
                Step-by-step guides that walk you through building real applications and implementing specific features.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>
                Learn industry standards, coding patterns, and architectural decisions that lead to maintainable code.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Design & UX</CardTitle>
              <CardDescription>
                Explore modern design systems, UI patterns, and user experience principles for web applications.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Join Our Community</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you're just starting your development journey or you're a seasoned professional, there's something
          here for you. Follow along as we explore the ever-evolving world of web development.
        </p>
      </section>
    </div>
  )
}
