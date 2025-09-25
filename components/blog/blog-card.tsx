import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/types/blog"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Clock } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card className={`h-full transition-all hover:shadow-lg ${featured ? "md:col-span-2" : ""}`}>
      {post.coverImage && (
        <div className={`relative ${featured ? "h-64" : "h-48"} overflow-hidden rounded-t-lg`}>
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          {post.featured && (
            <Badge className="absolute top-4 left-4" variant="secondary">
              Featured
            </Badge>
          )}
        </div>
      )}

      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <CalendarDays className="h-4 w-4" />
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <Clock className="h-4 w-4 ml-2" />
          <span>{post.readingTime} min read</span>
        </div>

        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className={`font-bold group-hover:text-primary transition-colors ${featured ? "text-2xl" : "text-xl"}`}>
            {post.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
            <AvatarFallback>
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">{post.category}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
