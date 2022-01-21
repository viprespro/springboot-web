import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotFoundGif from '@/assets/imgs/404.gif'

import style from './index.module.less'
export default class NotFound extends Component {
  render() {
    return (
      <div className={style.container}>
        <Link to='/'>
          <img src={NotFoundGif} className={style.img} alt='404 not Found' />
        </Link>
      </div>
    )
  }
}
