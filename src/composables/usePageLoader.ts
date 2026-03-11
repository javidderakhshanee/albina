import { ref } from 'vue'

const loading = ref(false)

export function usePageLoader() {
  return { loading }
}
