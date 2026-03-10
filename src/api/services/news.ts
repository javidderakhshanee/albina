import apiClient from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { ApiResponse } from '@/types/api'
import type {
  NewsListResponse,
  NewsByIdResponse,
  NewsListRequest,
  NewsCategory,
} from '@/types/News'

export const newsService = {
  async getNewsList(request: NewsListRequest): Promise<ApiResponse<NewsListResponse>> {
    const response = await apiClient.get<ApiResponse<NewsListResponse>>(API_ENDPOINTS.NEWS_LIST, {
      params: request,
    })

    return response.data
  },

  async getNewsCategory(): Promise<ApiResponse<NewsCategory[]>> {
    const url = API_ENDPOINTS.NEWS_CATEGORY
    const response = await apiClient.get<ApiResponse<NewsCategory[]>>(url)
    return response.data
  },

  async getNewsPost(id: string): Promise<ApiResponse<NewsByIdResponse>> {
    const url = API_ENDPOINTS.NEWS_POST.replace(':id', id.toString())
    const response = await apiClient.get<ApiResponse<NewsByIdResponse>>(url)
    return response.data
  },
}
