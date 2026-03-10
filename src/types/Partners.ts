export interface Partner {
  id: string
  title: string
  htmlBody: string
  location: string
  imageUrl: string | null
  thumbnailUrl: string | null
}

export interface PartnerByIdResponse {
  partner: Partner
  relatedPartners?: Partner[]
}
export interface PartnerListResponse {
  partners: Partner[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}
