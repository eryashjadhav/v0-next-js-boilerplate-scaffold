"use client"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar: string
  }
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "TypeScript Best Practices for React Applications",
    excerpt:
      "Discover essential TypeScript patterns and best practices that will make your React applications more robust and maintainable.",
    content: `
# TypeScript Best Practices for React Applications

TypeScript has become an essential tool for building robust React applications. In this comprehensive guide, we'll explore the best practices that will help you write better, more maintainable code.

## 1. Proper Component Typing

When creating React components with TypeScript, always define clear interfaces for your props:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  );
};
\`\`\`

## 2. State Management with TypeScript

Use proper typing for your state management:

\`\`\`typescript
interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const [state, setState] = useState<UserState>({
  user: null,
  loading: false,
  error: null
});
\`\`\`

## 3. Custom Hooks

Create reusable custom hooks with proper typing:

\`\`\`typescript
function useApi<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Implementation here...

  return { data, loading, error };
}
\`\`\`

## Conclusion

Following these TypeScript best practices will help you build more reliable and maintainable React applications. Remember to always prioritize type safety and clear interfaces.
    `,
    author: {
      name: "Mike Johnson",
      role: "Development",
      avatar: "/developer-avatar.png",
    },
    publishedAt: "January 15, 2024",
    readTime: "5 min read",
    category: "typescript",
    tags: ["typescript", "react", "best-practices"],
    featured: true,
    slug: "typescript-best-practices-react",
  },
  {
    id: "2",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to build modern web applications with the latest features in Next.js 15, including the new App Router and Server Components.",
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building web applications even more powerful and efficient.

## What's New in Next.js 15

### 1. Enhanced App Router
The App Router has been further refined with better performance and new capabilities.

### 2. Improved Server Components
Server Components now offer better streaming and loading states.

### 3. Better TypeScript Support
Enhanced TypeScript integration with improved type inference.

## Getting Started

To create a new Next.js 15 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Key Features to Explore

1. **Server Actions** - Handle form submissions and mutations
2. **Streaming** - Improve loading experiences
3. **Metadata API** - Better SEO and social sharing
4. **Image Optimization** - Automatic image optimization

Start building amazing web applications with Next.js 15 today!
    `,
    author: {
      name: "Sarah Chen",
      role: "Frontend Engineer",
      avatar: "/female-engineer-avatar.png",
    },
    publishedAt: "January 10, 2024",
    readTime: "7 min read",
    category: "nextjs",
    tags: ["nextjs", "react", "web-development"],
    featured: true,
    slug: "getting-started-nextjs-15",
  },
  {
    id: "3",
    title: "Modern CSS Techniques for 2024",
    excerpt:
      "Explore the latest CSS features and techniques that will help you create beautiful, responsive designs with less code.",
    content: `
# Modern CSS Techniques for 2024

CSS continues to evolve with powerful new features that make styling more intuitive and efficient.

## Container Queries

Container queries allow you to style elements based on their container's size:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`

## CSS Grid Subgrid

Subgrid allows nested grids to participate in their parent's grid:

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
\`\`\`

## Cascade Layers

Organize your CSS with cascade layers:

\`\`\`css
@layer base, components, utilities;

@layer base {
  body { margin: 0; }
}

@layer components {
  .btn { padding: 1rem; }
}
\`\`\`

These modern techniques will help you write more maintainable and powerful CSS.
    `,
    author: {
      name: "Alex Rivera",
      role: "UI/UX Designer",
      avatar: "/diverse-designer-avatars.png",
    },
    publishedAt: "January 5, 2024",
    readTime: "6 min read",
    category: "css",
    tags: ["css", "design", "frontend"],
    featured: false,
    slug: "modern-css-techniques-2024",
  },
]

export const categories = [
  { id: "all", name: "All Posts", count: blogPosts.length },
  { id: "typescript", name: "TypeScript", count: blogPosts.filter((post) => post.category === "typescript").length },
  { id: "nextjs", name: "Next.js", count: blogPosts.filter((post) => post.category === "nextjs").length },
  { id: "css", name: "CSS", count: blogPosts.filter((post) => post.category === "css").length },
  { id: "react", name: "React", count: blogPosts.filter((post) => post.tags.includes("react")).length },
]

export const tags = ["typescript", "react", "nextjs", "css", "best-practices", "web-development", "design", "frontend"]

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag))
}
