"use client"

import { useState, useMemo } from "react"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogFilters } from "@/components/blog/blog-filters"
import { blogPosts } from "../../lib/blog-data"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [postsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = !selectedCategory || post.category.toLowerCase() === selectedCategory.toLowerCase()

      const matchesTag = !selectedTag || post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())

      return matchesSearch && matchesCategory && matchesTag
    })
  }, [searchQuery, selectedCategory, selectedTag])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const featuredPost = filteredPosts.find((post) => post.featured)
  const regularPosts = paginatedPosts.filter((post) => !post.featured || post !== featuredPost)

  return (
    <div className="container py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover insights, tutorials, and best practices in web development
        </p>
      </div>

      {/* Filters */}
      <BlogFilters
        onSearch={setSearchQuery}
        onCategoryFilter={setSelectedCategory}
        onTagFilter={setSelectedTag}
        selectedCategory={selectedCategory}
        selectedTag={selectedTag}
        searchQuery={searchQuery}
      />

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {filteredPosts.length === 0
          ? "No posts found matching your criteria."
          : `Showing ${filteredPosts.length} post${filteredPosts.length === 1 ? "" : "s"}`}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 && (
        <div className="space-y-8">
          {/* Featured Post */}
          {featuredPost && currentPage === 1 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
              <BlogCard post={featuredPost} featured />
            </div>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {featuredPost && currentPage === 1 ? "More Posts" : "All Posts"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>

              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
