import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface IClientOptions extends AxiosRequestConfig {
  loading?: boolean
  hideBussinessErrorToast?: boolean
  hideNetworkError?: boolean
}

const TIMEOUT = 30 * 1000

class Client {
  httpInstance: AxiosInstance

  constructor() {
    this.httpInstance = Axios.create({
      baseURL: process.env.BASE_URL,
      timeout: TIMEOUT,
    })
    this.httpInstance.interceptors.request.use((config) => {
      const token = ''
      if (token) config.headers['Authorization'] = token
      return config
    })
    this.httpInstance.interceptors.response.use((response) => {
      return response
    })
  }

  request<T>(options: IClientOptions) {
    const { loading = true, method, url, data, params } = options
    if (loading) {
    }
    return new Promise<T>((resolve, reject) => {
      this.httpInstance
        .request({ method, url, data, params })
        .then(({ data }) => {
          const { success, result, code } = data
          if (success) {
            return resolve(result)
          }
          // 每个项目后端逻辑不一致 需要根据实际情况来进行封装
          return reject(code)
        })
    })
  }

  get<T>(url: string, options?: Omit<IClientOptions, 'url'>) {
    return this.request<T>({})
  }

  post<T>() {
    return this.request<T>({})
  }
}

export const client = new Client()
