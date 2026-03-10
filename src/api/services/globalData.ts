import apiClient from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { ApiResponse } from '@/types/api'
import type { CommonQuestionResponse, GlobalDataResponse } from '@/types/GlobalData'

export const globalService = {
  async getGlobalData(): Promise<ApiResponse<GlobalDataResponse>> {
    const response = await apiClient.get<ApiResponse<GlobalDataResponse>>(API_ENDPOINTS.GLOBAL_DATA)

    return response.data
  },

  async getCommonQuestions(): Promise<ApiResponse<CommonQuestionResponse>> {
    const response = await apiClient.get<ApiResponse<CommonQuestionResponse>>(
      API_ENDPOINTS.COMMON_QUESTIONS,
    )

    return response.data
  },
}
