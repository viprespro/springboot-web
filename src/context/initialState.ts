import { IUserInfo } from '@/types/user'

export interface IState {
  userInfo: IUserInfo
  loading: boolean
}

const initialState = (): IState => {
  return {
    userInfo: {
      nickname: 'Ares',
      avatar: 'http://vipres.top/imgs/avatar.jpg',
    },
    loading: false,
  }
}

export default initialState
