import type { LocaleInfo } from '@/locals'
import apiClient from '../client'
import { API_ENDPOINTS } from '../endpoints'
import type { ApiResponse } from '@/types/api'
import type {
  CommonQuestionResponse,
  ContactCareerForm,
  ContactInvestmentForm,
  ContactRequestResponse,
  ContactSubcontractorForm,
  ContactSupplierForm,
  GlobalDataResponse,
} from '@/types/GlobalData'

export const globalService = {
  async getGlobalData(): Promise<ApiResponse<GlobalDataResponse>> {
    const response = await apiClient.get<ApiResponse<GlobalDataResponse>>(API_ENDPOINTS.GLOBAL_DATA)

    return response.data
  },
  async getSupportLocales(): Promise<ApiResponse<LocaleInfo[]>> {
    const response = await apiClient.get<ApiResponse<LocaleInfo[]>>(API_ENDPOINTS.SUPPORT_LOCALES)

    return response.data
  },
  async getCommonQuestions(): Promise<ApiResponse<CommonQuestionResponse>> {
    const response = await apiClient.get<ApiResponse<CommonQuestionResponse>>(
      API_ENDPOINTS.COMMON_QUESTIONS,
    )

    return response.data
  },

  async postContactSuppliersRequest(
    request: ContactSupplierForm,
  ): Promise<ApiResponse<ContactRequestResponse>> {
    const response = await apiClient.post<ApiResponse<ContactRequestResponse>>(
      API_ENDPOINTS.CONTACT_SUPPLIERS_REQUEST,
      request,
    )

    return response.data
  },
  async postContactCareerRequest(
    request: ContactCareerForm,
  ): Promise<ApiResponse<ContactRequestResponse>> {
    const response = await apiClient.post<ApiResponse<ContactRequestResponse>>(
      API_ENDPOINTS.CONTACT_CAREER_REQUEST,
      request,
    )

    return response.data
  },
  async postContactInvestmentRequest(
    request: ContactInvestmentForm,
  ): Promise<ApiResponse<ContactRequestResponse>> {
    const response = await apiClient.post<ApiResponse<ContactRequestResponse>>(
      API_ENDPOINTS.CONTACT_INVESTMENT_REQUEST,
      request,
    )

    return response.data
  },

  async postContactSubcontractorRequest(
    request: ContactSubcontractorForm,
  ): Promise<ApiResponse<ContactRequestResponse>> {
    const response = await apiClient.post<ApiResponse<ContactRequestResponse>>(
      API_ENDPOINTS.CONTACT_SUBCONTRACTOR_REQUEST,
      request,
    )

    return response.data
  },
}
