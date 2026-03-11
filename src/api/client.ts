import axios, { type AxiosInstance, type AxiosError, type InternalAxiosRequestConfig } from 'axios'
import { getErrorMessage, getMsgTranslation } from '@/utils/errorMessages'
import type { LocaleInfo } from '@/locals'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '185.172.213.56:16820'

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    'Content-Type': 'application/json',
  },
})

let isRefreshing = false
let failedQueue: Array<{
  resolve: (value?: unknown) => void
  reject: (reason?: unknown) => void
}> = []

const processQueue = (error: AxiosError | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve()
    }
  })

  failedQueue = []
}

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('app-access-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    const local_inf =
      localStorage.getItem('app-locale') ||
      JSON.stringify({ code: 'en', dir: 'ltr', name: 'EN', nativeName: 'EN' } as LocaleInfo)

    config.headers['Accept-Language'] = (JSON.parse(local_inf) as LocaleInfo).code

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => {
    const data = response.data as any

    const success = data?.success ?? data?.Success
    const message = data?.message ?? data?.Message

    if (data && message) {
      let toast: any = null

      const loadToast = async () => {
        if (!toast) {
          //const { useToast } = await import('vue-toastification')
          //toast = useToast()
        }
        return toast
      }

      const translatedMessage = getMsgTranslation(message)

      if (success === false) {
        loadToast().then((t) => t.error(translatedMessage))
        return Promise.reject({
          response,
          isApiError: true,
          message: translatedMessage,
        })
      } else {
        loadToast().then((t) => t.success(translatedMessage))
      }
    }

    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then(() => {
            return apiClient(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }

      originalRequest._retry = true
      isRefreshing = true

      const refreshToken = localStorage.getItem('albina-refresh-token')

      if (!refreshToken) {
        handleLogout()
        return Promise.reject(error)
      }

      try {
        // const { useAuthStore } = await import('@/stores/auth')
        // const authStore = useAuthStore()
        // const success = await authStore.refreshAccessToken()
        // if (success) {
        //   processQueue(null)
        //   isRefreshing = false
        //   return apiClient(originalRequest)
        // } else {
        //   processQueue(error)
        //   isRefreshing = false
        //   handleLogout()
        //   return Promise.reject(error)
        // }
      } catch (refreshError) {
        processQueue(error)
        isRefreshing = false
        handleLogout()
        return Promise.reject(refreshError)
      }
    }

    let toast: any = null
    const loadToast = async () => {
      if (!toast) {
        // const { useToast } = await import('vue-toastification')
        // toast = useToast()
      }
      return toast
    }

    if (error.response) {
      const status = error.response.status
      const data = error.response.data as any

      if (data?.message) {
        const translatedMessage = getMsgTranslation(data.message)
        loadToast().then((t) => t.error(translatedMessage))
      } else {
        let message = ''
        switch (status) {
          case 401:
            message = getErrorMessage('401')
            break
          case 403:
            message = getErrorMessage('403')
            break
          case 404:
            message = getErrorMessage('404')
            break
          case 500:
            message = getErrorMessage('500')
            break
          default:
            message = getErrorMessage('default')
        }
        loadToast().then((t) => t.error(message))
      }
    } else if (error.request) {
      loadToast().then((t) => t.error(getErrorMessage('network')))
    } else {
      loadToast().then((t) => t.error(getErrorMessage('unknown')))
    }

    return Promise.reject(error)
  },
)

async function handleLogout() {
  // const { useAuthStore } = await import('@/stores/auth')
  // const authStore = useAuthStore()
  // authStore.logout()

  if (window.location.pathname !== '/') {
    window.location.href = '/'
  }
}

export default apiClient
