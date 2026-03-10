export interface Service {
  id: string
  title: string
  htmlBody: string
  description: string
  imageUrl: string | null
  thumbnailUrl: string | null
}

export interface ServiceByIdResponse {
  service: Service
  relatedServices?: Service[]
}
export interface ServiceListResponse {
  services: Service[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}
