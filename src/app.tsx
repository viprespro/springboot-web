import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Spinner } from '@/components/spinner'
import Home from '@/pages/home'
import NotFound from '@/pages/notFound'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Spinner />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}
