import { ref } from 'vue'
import { serviceService } from '@/api/services/services'
import type { ServiceListResponse, ServiceByIdResponse } from '@/types/Services'

const serviceListData = ref<ServiceListResponse | null>(null)
const serviceById = ref<ServiceByIdResponse>()
const loadingServicesList = ref(false)
const loadingServicesById = ref(false)
const error = ref<string | null>(null)
export function useServices() {
  const fetchServicesList = async () => {
    loadingServicesList.value = true
    error.value = null
    try {
      const response = await serviceService.getServiceList()
      serviceListData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch services list'
    } finally {
      loadingServicesList.value = false
    }
  }

  const fetchServicesById = async (id: string) => {
    loadingServicesById.value = true
    error.value = null
    try {
      const response = await serviceService.getServicePost(id)
      serviceById.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch services by id'
    } finally {
      loadingServicesById.value = false
    }
  }
  return {
    serviceListData,
    loadingServicesList,
    error,
    fetchServicesList,
    fetchServicesById,
    serviceById,
    loadingServicesById,
  }
}
