export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface Notification {
  id: number
  title: string
  description: string
  date: string
  tags?: string[]
}
