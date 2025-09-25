import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogCard } from "@/components/blog/blog-card"
import { blogPosts } from "../lib/blog-data"
import { ArrowRight, BookOpen, Code, Palette } from "lucide-react"

export default function HomePage() {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">DevBlog</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the latest insights, tutorials, and best practices in web development. From Next.js to TypeScript,
            we cover everything you need to build modern applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/blog">
                Explore Blog Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Cover</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our blog focuses on modern web development technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Code className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Development</CardTitle>
              <CardDescription>
                Learn about the latest frameworks, libraries, and development techniques
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Design</CardTitle>
              <CardDescription>Explore UI/UX design principles and modern design systems</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Tutorials</CardTitle>
              <CardDescription>Step-by-step guides to help you master new technologies</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Posts</h2>
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
          <Button variant="outline" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
