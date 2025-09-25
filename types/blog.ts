export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    bio?: string
  }
  publishedAt: string
  updatedAt?: string
  tags: string[]
  category: string
  readingTime: number
  featured: boolean
  coverImage?: string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
  count: number
}

export interface BlogTag {
  id: string
  name: string
  slug: string
  count: number
}
