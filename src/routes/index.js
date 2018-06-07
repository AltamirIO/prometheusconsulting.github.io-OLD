import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'

class PrometheusRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Services" component={Services} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default PrometheusRoutes