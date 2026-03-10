import apiClient from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { ApiResponse } from '@/types/api'
import type {
  CareerListResponse,
  CareerByIdResponse,
  CareerCategory,
  CareersListRequest,
} from '@/types/Careers'

export const careersService = {
  async getCareerList(request: CareersListRequest): Promise<ApiResponse<CareerListResponse>> {
    const response = await apiClient.get<ApiResponse<CareerListResponse>>(
      API_ENDPOINTS.CAREER_LIST,
      { params: request },
    )

    return response.data
  },

  async getCareerCategory(): Promise<ApiResponse<CareerCategory[]>> {
    const url = API_ENDPOINTS.CAREER_CATEGORY
    const response = await apiClient.get<ApiResponse<CareerCategory[]>>(url)
    return response.data
  },

  async getCareerPost(id: string): Promise<ApiResponse<CareerByIdResponse>> {
    const url = API_ENDPOINTS.CAREER_POST.replace(':id', id.toString())
    const response = await apiClient.get<ApiResponse<CareerByIdResponse>>(url)
    return response.data
  },
}
