import React from 'react'
import { Spin } from 'antd'
import MessageText from '@/contants/message'
import { LoadingOutlined } from '@ant-design/icons'
import { useApplicationState } from '@/context/appContext'

import styles from './index.module.less'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

/**
 * loading spinner组件
 */

export const Spinner = (): JSX.Element | null => {
  const [{ loading }] = useApplicationState()

  if (!loading) {
    return null
  }

  return (
    <div className={styles.container}>
      <Spin indicator={antIcon} size={'large'} tip={MessageText.Loading} />
    </div>
  )
}
