import { ref } from 'vue'
import { projectsService } from '@/api/services/projects'
import type {
  ProjectsListRequest,
  ProjectsListResponse,
  ProjectCategory,
  ProjectsByIdResponse,
  ProjectGroup,
} from '@/types/Projects'

const projectsListData = ref<ProjectsListResponse | null>(null)
const projectsCategoryData = ref<ProjectCategory[] | null>([])
const projectsGroupData = ref<ProjectGroup[] | null>([])

const projectsById = ref<ProjectsByIdResponse>()
const loadingProjectsList = ref(false)
const loadingProjectsCategories = ref(false)
const loadingProjectsGroups = ref(false)
const loadingProjectsById = ref(false)
const error = ref<string | null>(null)

export function useProjects() {
  const fetchProjectsList = async (request: ProjectsListRequest) => {
    loadingProjectsList.value = true
    error.value = null
    try {
      const response = await projectsService.getProjectsList(request)
      projectsListData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch projects list'
    } finally {
      loadingProjectsList.value = false
    }
  }

  const fetchProjectsCategories = async () => {
    loadingProjectsCategories.value = true
    error.value = null
    try {
      const response = await projectsService.getProjectCategory()
      projectsCategoryData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch projects categories'
    } finally {
      loadingProjectsCategories.value = false
    }
  }

  const fetchProjectsGroups = async () => {
    loadingProjectsGroups.value = true
    error.value = null
    try {
      const response = await projectsService.getProjectGroup()
      projectsGroupData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch projects groups'
    } finally {
      loadingProjectsGroups.value = false
    }
  }

  const fetchProjectsById = async (id: string) => {
    loadingProjectsById.value = true
    error.value = null
    try {
      const response = await projectsService.getProjectPost(id)
      projectsById.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch projects by id'
    } finally {
      loadingProjectsById.value = false
    }
  }
  return {
    projectsListData,
    projectsCategoryData,
    projectsGroupData,
    loadingProjectsList,
    loadingProjectsCategories,
    error,
    fetchProjectsList,
    fetchProjectsCategories,
    fetchProjectsById,
    fetchProjectsGroups,
    projectsById,
    loadingProjectsById,
    loadingProjectsGroups,
  }
}
