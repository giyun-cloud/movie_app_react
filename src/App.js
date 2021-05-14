import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Detail from './router/Detail'
import Navigation from './components/Navigation'
import About from './router/About'
import Home from './router/Home'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}

export default App
