import { ref } from 'vue'
import { globalService } from '@/api/services/globalData'
import type {
  GlobalDataResponse,
  CommonQuestionResponse,
  ContactSupplierForm,
  ContactSubcontractorForm,
  ContactInvestmentForm,
  ContactCareerForm,
} from '@/types/GlobalData'
import type { LocaleInfo } from '@/locals'

const globalData = ref<GlobalDataResponse | null>(null)
const commonQuestions = ref<CommonQuestionResponse | null>(null)
const loadingGlobalData = ref(false)
const supportedLocales = ref<LocaleInfo[] | null>(null)
const loadingSupportLangs = ref(false)
const loadingCommonQuestions = ref(false)
const loadingPostingData = ref(false)
const error = ref<string | null>(null)
export function useGlobalData() {
  const fetchGlobalData = async () => {
    loadingGlobalData.value = true
    error.value = null
    try {
      const response = await globalService.getGlobalData()
      globalData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch global data'
    } finally {
      loadingGlobalData.value = false
    }
  }

  const fetchSupportLocales = async () => {
    loadingSupportLangs.value = true
    error.value = null
    try {
      const response = await globalService.getSupportLocales()
      supportedLocales.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch global data'
    } finally {
      loadingGlobalData.value = false
    }
  }
  const fetchCommonQuestions = async () => {
    loadingCommonQuestions.value = true
    error.value = null
    try {
      const response = await globalService.getCommonQuestions()
      commonQuestions.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch common questions'
    } finally {
      loadingCommonQuestions.value = false
    }
  }

  const postContactSuppliersRequest = async (request: ContactSupplierForm) => {
    loadingPostingData.value = true
    error.value = null
    try {
      const response = await globalService.postContactSuppliersRequest(request)
      if (!response.success) throw null
      return response.data.id
    } catch (err: any) {
      error.value = err.message || 'Failed to posting data'
    } finally {
      loadingPostingData.value = false
    }
  }
  const postContactSubcontractorRequest = async (request: ContactSubcontractorForm) => {
    loadingPostingData.value = true
    error.value = null
    try {
      const response = await globalService.postContactSubcontractorRequest(request)
      if (!response.success) throw null
      return response.data.id
    } catch (err: any) {
      error.value = err.message || 'Failed to posting data'
    } finally {
      loadingPostingData.value = false
    }
  }
  const postContactInvestmentRequest = async (request: ContactInvestmentForm) => {
    loadingPostingData.value = true
    error.value = null
    try {
      const response = await globalService.postContactInvestmentRequest(request)
      if (!response.success) throw null
      return response.data.id
    } catch (err: any) {
      error.value = err.message || 'Failed to posting data'
    } finally {
      loadingPostingData.value = false
    }
  }
  const postContactCareerRequest = async (request: ContactCareerForm) => {
    loadingPostingData.value = true
    error.value = null
    try {
      const response = await globalService.postContactCareerRequest(request)
      if (!response.success) throw null
      return response.data.id
    } catch (err: any) {
      error.value = err.message || 'Failed to posting data'
    } finally {
      loadingPostingData.value = false
    }
  }
  return {
    globalData,
    commonQuestions,
    loadingGlobalData,
    loadingCommonQuestions,
    supportedLocales,
    error,
    fetchGlobalData,
    fetchCommonQuestions,
    fetchSupportLocales,
    postContactSuppliersRequest,
    postContactCareerRequest,
    postContactInvestmentRequest,
    postContactSubcontractorRequest,
    useGlobalData,
  }
}
