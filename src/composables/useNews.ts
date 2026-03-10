import { ref } from 'vue'
import { newsService } from '@/api/services/news'
import type {
  NewsListRequest,
  NewsListResponse,
  NewsCategory,
  NewsByIdResponse,
} from '@/types/News'

const newsListData = ref<NewsListResponse | null>(null)
const newsCategoryData = ref<NewsCategory[] | null>([])
const newsById = ref<NewsByIdResponse>()
const loadingNewsList = ref(false)
const loadingNewsCategories = ref(false)
const loadingNewsById = ref(false)
const error = ref<string | null>(null)
export function useNews() {
  const fetchNewsList = async (request: NewsListRequest) => {
    loadingNewsList.value = true
    error.value = null
    try {
      const response = await newsService.getNewsList(request)
      newsListData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch news list'
    } finally {
      loadingNewsList.value = false
    }
  }

  const fetchNewsCategories = async () => {
    loadingNewsCategories.value = true
    error.value = null
    try {
      const response = await newsService.getNewsCategory()
      newsCategoryData.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch news categories'
    } finally {
      loadingNewsCategories.value = false
    }
  }
  const fetchNewsById = async (id: string) => {
    loadingNewsById.value = true
    error.value = null
    try {
      const response = await newsService.getNewsPost(id)
      newsById.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch news by id'
    } finally {
      loadingNewsById.value = false
    }
  }
  return {
    newsListData,
    newsCategoryData,
    loadingNewsList,
    loadingNewsCategories,
    error,
    fetchNewsList,
    fetchNewsCategories,
    fetchNewsById,
    newsById,
    loadingNewsById,
  }
}
