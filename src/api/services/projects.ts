import apiClient from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { ApiResponse } from '@/types/api'
import type {
  ProjectsListResponse,
  ProjectsByIdResponse,
  ProjectsListRequest,
  ProjectCategory,
  ProjectGroup,
} from '@/types/Projects'

export const projectsService = {
  async getProjectsList(request: ProjectsListRequest): Promise<ApiResponse<ProjectsListResponse>> {
    const response = await apiClient.get<ApiResponse<ProjectsListResponse>>(
      API_ENDPOINTS.PROJECTS_LIST,
      {
        params: request,
      },
    )

    return response.data
  },

  async getProjectCategory(): Promise<ApiResponse<ProjectCategory[]>> {
    const url = API_ENDPOINTS.PROJECTS_CATEGORY
    const response = await apiClient.get<ApiResponse<ProjectCategory[]>>(url)
    return response.data
  },

  async getProjectGroup(): Promise<ApiResponse<ProjectGroup[]>> {
    const url = API_ENDPOINTS.PROJECTS_GROUP
    const response = await apiClient.get<ApiResponse<ProjectGroup[]>>(url)
    return response.data
  },

  async getProjectPost(id: string): Promise<ApiResponse<ProjectsByIdResponse>> {
    const url = API_ENDPOINTS.PROJECTS_POST.replace(':id', id.toString())
    const response = await apiClient.get<ApiResponse<ProjectsByIdResponse>>(url)
    return response.data
  },
}
