export interface ProjectCategory {
  id: string
  title: string
}

export interface ProjectGroup {
  id: string
  title: string
}

export interface Projects {
  id: string
  title: string
  categoryTitle: string
  categoryId: string
  groupTitle: string
  groupId: string
  htmlBody: string
  clients: string
  budget: string
  location: string
  sector: string
  completedAt?: string
  imageUrl: string | null
  thumbnailUrl: string | null
}

export interface ProjectsByIdResponse {
  project: Projects
}

export interface ProjectsListResponse {
  projects: Projects[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}
export interface ProjectsListRequest {
  selectedCategoryId?: string
  selectedGroupId?: string
  currentPage?: number
  pageSize?: number
}

export interface ProjectsCategoryResponse {
  categories: ProjectCategory[]
}

export interface ProjectsGroupResponse {
  groups: ProjectGroup[]
}
