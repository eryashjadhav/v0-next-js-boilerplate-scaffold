"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"
import { categories, tags } from "../../lib/blog-data"

interface BlogFiltersProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string | null) => void
  onTagFilter: (tag: string | null) => void
  selectedCategory: string | null
  selectedTag: string | null
  searchQuery: string
}

export function BlogFilters({
  onSearch,
  onCategoryFilter,
  onTagFilter,
  selectedCategory,
  selectedTag,
  searchQuery,
}: BlogFiltersProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(localSearch)
  }

  const clearFilters = () => {
    setLocalSearch("")
    onSearch("")
    onCategoryFilter(null)
    onTagFilter(null)
  }

  const hasActiveFilters = searchQuery || selectedCategory || selectedTag

  return (
    <div className="space-y-6">
      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="pl-10 pr-4"
        />
      </form>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select
          value={selectedCategory || "all"}
          onValueChange={(value) => onCategoryFilter(value === "all" ? null : value)}
        >
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.name} ({category.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedTag || "all"} onValueChange={(value) => onTagFilter(value === "all" ? null : value)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Tags" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {tags.map((tag) => (
              <SelectItem key={tag.id} value={tag.slug}>
                {tag.name} ({tag.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button variant="outline" onClick={clearFilters} className="flex items-center gap-2 bg-transparent">
            <X className="h-4 w-4" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Search: "{searchQuery}"
              <X className="h-3 w-3 cursor-pointer" onClick={() => onSearch("")} />
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {categories.find((c) => c.slug === selectedCategory)?.name}
              <X className="h-3 w-3 cursor-pointer" onClick={() => onCategoryFilter(null)} />
            </Badge>
          )}
          {selectedTag && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Tag: {tags.find((t) => t.slug === selectedTag)?.name}
              <X className="h-3 w-3 cursor-pointer" onClick={() => onTagFilter(null)} />
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
