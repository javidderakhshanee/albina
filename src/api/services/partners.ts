import apiClient from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { ApiResponse } from '@/types/api'
import type { PartnerListResponse, PartnerByIdResponse } from '@/types/Partners'

export const partnerService = {
  async getPartnerList(): Promise<ApiResponse<PartnerListResponse>> {
    const response = await apiClient.get<ApiResponse<PartnerListResponse>>(
      API_ENDPOINTS.PARTNER_LIST,
    )

    return response.data
  },

  async getPartnerById(id: string): Promise<ApiResponse<PartnerByIdResponse>> {
    const url = API_ENDPOINTS.PARTNER_DETAILS.replace(':id', id.toString())
    const response = await apiClient.get<ApiResponse<PartnerByIdResponse>>(url)
    return response.data
  },
}
