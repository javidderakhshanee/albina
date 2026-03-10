import apiClient from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { ApiResponse } from '@/types/api'
import type { ServiceListResponse, ServiceByIdResponse } from '@/types/Services'

export const serviceService = {
  async getServiceList(): Promise<ApiResponse<ServiceListResponse>> {
    const response = await apiClient.get<ApiResponse<ServiceListResponse>>(
      API_ENDPOINTS.SERVICE_LIST,
    )

    return response.data
  },

  async getServicePost(id: string): Promise<ApiResponse<ServiceByIdResponse>> {
    const url = API_ENDPOINTS.SERVICE_POST.replace(':id', id.toString())
    const response = await apiClient.get<ApiResponse<ServiceByIdResponse>>(url)
    return response.data
  },
}
