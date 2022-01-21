import React, { Component } from 'react'
import AppContext from '@/context/appContext'
import { List, Avatar } from 'antd'

import style from './index.module.less'

export default class Home extends Component {
  componentDidMount() {
    const [{ userInfo }, dispatch] = this.context
    console.log('userInfo:', userInfo)

    setTimeout(() => {
      dispatch('ToggleLoading')
    }, 3000)
  }

  static contextType = AppContext

  render() {
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ]

    return (
      <div className={style.container}>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title={<a href='#'>{item.title}</a>}
                description='Ant Design, a design language for background applications, is refined by Ant UED Team'
              />
            </List.Item>
          )}
        />
        ,
      </div>
    )
  }
}
