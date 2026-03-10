import { ref } from 'vue'
import type { PartnerByIdResponse, PartnerListResponse } from '@/types/Partners'
import { partnerService } from '@/api/services/partners'

const partnerListData = ref<PartnerListResponse | null>(null)
const partnerById = ref<PartnerByIdResponse>()
const loadingPartnersList = ref(false)
const loadingPartnersById = ref(false)
const error = ref<string | null>(null)
export function usePartners() {
  const fetchPartnersList = async () => {
    loadingPartnersList.value = true
    error.value = null
    try {
      const response = await partnerService.getPartnerList()
      partnerListData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch partners list'
    } finally {
      loadingPartnersList.value = false
    }
  }

  const fetchPartnersById = async (id: string) => {
    loadingPartnersById.value = true
    error.value = null
    try {
      const response = await partnerService.getPartnerById(id)
      partnerById.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch partners by id'
    } finally {
      loadingPartnersById.value = false
    }
  }
  return {
    partnerListData,
    loadingPartnersList,
    error,
    fetchPartnersList,
    fetchPartnersById,
    partnerById,
    loadingPartnersById,
  }
}
