import { ref } from 'vue'
import { careersService } from '@/api/services/careers'
import type { CareerListResponse, CareerCategory, CareerByIdResponse,CareersListRequest } from '@/types/Careers'

const careersListData = ref<CareerListResponse | null>(null)
const careersCategoryData = ref<CareerCategory[] | null>([])
const careerById = ref<CareerByIdResponse>()
const loadingCareerList = ref(false)
const loadingCareerCategories = ref(false)
const loadingCareerById = ref(false)
const error = ref<string | null>(null)
export function useCareers() {
  const fetchCareersList = async (request: CareersListRequest) => {
    loadingCareerList.value = true
    error.value = null
    try {
      const response = await careersService.getCareerList(request)
      careersListData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch careers list'
    } finally {
      loadingCareerList.value = false
    }
  }

  const fetchCareerCategories = async () => {
    loadingCareerCategories.value = true
    error.value = null
    try {
      const response = await careersService.getCareerCategory()
      careersCategoryData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch careers categories'
    } finally {
      loadingCareerCategories.value = false
    }
  }
  const fetchCareerById = async (id: string) => {
    loadingCareerById.value = true
    error.value = null
    try {
      const response = await careersService.getCareerPost(id)
      careerById.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch career by id'
    } finally {
      loadingCareerById.value = false
    }
  }
  return {
    careersListData,
    careersCategoryData,
    loadingCareerList,
    loadingCareerCategories,
    error,
    fetchCareersList,
    fetchCareerCategories,
    fetchCareerById,
    careerById,
    loadingCareerById,
  }
}
