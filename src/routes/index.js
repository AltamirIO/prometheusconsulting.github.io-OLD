import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Admin from './Admin'

class PrometheusRoutes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Admin" component={Admin} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

export default PrometheusRoutes