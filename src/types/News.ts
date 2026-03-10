export interface NewsCategory {
  id: string
  title: string
}

export interface News {
  id: string
  title: string
  categoryTitle: string
  htmlBody: string
  releasedAt: Date | null
  day: string | null
  monthName: string | null
  year: string | null
  tags: string[] | null
  imageUrl: string | null
  thumbnailUrl: string | null
  shortLinkForShare: NewsSocialLink[]
}

export interface NewsSocialLink {
  link: string
  icon: string
}

export interface NewsByIdResponse {
  news: News
  relatedNews?: News[]
}
export interface NewsListResponse {
  news: News[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}

export interface NewsListRequest {
  selectedCategoryId?: string
  dateReleasedFrom?: string
  dateReleasedTo?: string
  selectedTag?: string
  currentPage?: number
  pageSize?: number
}

export interface NewsCategoryResponse {
  categories: NewsCategory[]
}
