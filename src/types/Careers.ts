export interface CareerCategory {
  id: string
  title: string
}

export interface CareerApplication {
  careerId: string
  fullName: string
  email: string
  phoneNumber: string
  coverLetter: string
  attachment?: File | null
}

export interface Career {
  id: string
  title: string
  company: string
  salary: string
  location: string
  categoryId: string
  categoryTitle: string
  htmlBody: string
  publishedAt: Date | null
  day: string | null
  monthName: string | null
  year: string | null
  tags: string[] | null
  imageUrl: string | null
  thumbnailUrl: string | null
}

export interface CareerByIdResponse {
  career: Career
  nextId: string | null
  previousId: string | null
}
export interface CareerListResponse {
  careers: Career[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}

export interface CareerCategoryResponse {
  categories: CareerCategory[]
}

export interface CareersListRequest {
  currentPage?: number
  pageSize?: number
}
