import { ref } from 'vue'
import { globalService } from '@/api/services/globalData'
import type { GlobalDataResponse, CommonQuestionResponse } from '@/types/GlobalData'

const globalData = ref<GlobalDataResponse | null>(null)
const commonQuestions = ref<CommonQuestionResponse | null>(null)
const loadingGlobalData = ref(false)
const loadingCommonQuestions = ref(false)
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
  return {
    globalData,
    commonQuestions,
    loadingGlobalData,
    loadingCommonQuestions,
    error,
    fetchGlobalData,
    fetchCommonQuestions,
  }
}
