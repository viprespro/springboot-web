import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { AppProvider } from '@/context/appContext'
import 'antd/dist/antd.css'
import '@/styles/index.less'
import './index.less'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
)
