import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({ baseURL })

console.log('URL base:', apiClient.defaults.baseURL);

export default apiClient