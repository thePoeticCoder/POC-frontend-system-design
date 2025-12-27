import axios from 'axios'
const devUrl = process.env.NEXT_PUBLIC_BASE_URL
const cashlessApiKey = process.env.NEXT_PUBLIC_CASHLESS_API_KEY

const refreshAccessToken = async () => {
  
  const refreshToken = localStorage.getItem('refreshToken')

  try {
    const res = await axios({
      url: `${devUrl}auth/get-new-access-token`,
      method: 'POST',
      data: {
        refreshToken,
      },
    })
    const { accessToken } = res?.data?.data
    localStorage.setItem('accessToken', res?.data?.data?.accessToken)
    return { accessToken }
  } catch (err) {
    localStorage.clear()
    const basePath = window.location.href.split('/')[0]
    window.location.href = `${basePath}/login`
    throw err
  }
}

const authAxios = () => {
  if (typeof window === 'undefined') {
    return axios
  }
  const accessToken = localStorage.accessToken
  const axiosInstance = axios.create({
    baseURL: devUrl,
    headers: {
      Authorization: `Bearer ${accessToken ? accessToken : ''}`,
      'Cache-Control': 'no-cache',
      'cashless-api-key': cashlessApiKey,
    },
  })

  axiosInstance.interceptors.request.use(
    (config: any) => {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken) {
        config.headers.Authorization = 'Bearer ' + accessToken
      }
      return config
    },
    (error) => {
      Promise.reject(error.response)
    }
  )

  axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
      const request = error.config
      if (error?.response?.status === 403 && !request._retry) {
        request._retry = true
        const { accessToken } = await refreshAccessToken()
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken

        request.headers['Authorization'] = 'Bearer ' + accessToken
        request.headers['Cache-Control'] = 'no-cache'
        request.headers['Pragma'] = 'no-cache'
        request.headers['Expires'] = '0'

        return axiosInstance(request)
      }
      return Promise.reject(error)
    }
  )
  return axiosInstance
}
export default authAxios()
