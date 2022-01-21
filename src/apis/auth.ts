import { client } from '@/utils/client'

import { ILogin } from '@/types/auth'

export const login = (params: ILogin) => {
  return client.post()
}
